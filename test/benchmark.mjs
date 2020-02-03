/* eslint-disable no-console */
import Benchmark from 'benchmark';
import slowDeepEqual from '../src/index.cjs';
import fastDeepEqual from 'fast-deep-equal';
import fastDeepEqualES6 from 'fast-deep-equal/es6/index.js';
import { suites } from './suites/index.mjs';
import { Features } from './Features.mjs';

// define packages to benchmark here
// you shouldn't need to touch the rest
// ---
const packages =
[
	{
		name : 'fast-deep-equal',
		features : Features.NONE,
		fn : (a, b) => fastDeepEqual(a, b)
	},
	{
		name : 'fast-deep-equal/es6',
		features: Features.ES6_SET | Features.ES6_MAP | Features.ES6_TYPED,
		fn : (a, b) => fastDeepEqualES6(a, b)
	},
	{
		name : 'slow-deep-equal (no checks)',
		features: Features.ALL ^ Features.CIRCULAR,
		fn : (a, b) => slowDeepEqual(a, b, false)
	},
	{
		name : 'slow-deep-equal (circular checks)',
		features: Features.ALL,
		fn : (a, b) => slowDeepEqual(a, b, true)
	}
];

// first map which features we can use
let availableFeatures = Features.ALL;
for (const pkg of packages)
{
	availableFeatures &= pkg.features;
}

console.log('Enabled features:');
for (const feature in Features)
{
	const flag = Features[feature];
	if (flag === Features.NONE || flag === Features.ALL)
	{
		continue;
	}
	console.log(`- ${feature} ... ${availableFeatures & flag ? 'ON' : 'OFF'}`);
}

// init a new benchmark suite
const bench = new Benchmark.Suite();
function eachTest(fn)
{
	for (const suite of suites)
	{
		const mask = suite.features;
		if (mask && (mask & availableFeatures) !== mask)
		{
			continue;
		}

		for (const test of suite.tests)
		{
			if (!fn(test, suite))
			{
				return false;
			}
		}
	}
	return true;
}

// test packages and define the benchmark
console.log('\nTesting packages:');
for (const pkg of packages)
{
	const passed = eachTest((test, suite) =>
	{
		try
		{
			if (pkg.fn(test.value1, test.value2) === test.equal)
			{
				return true;
			}
			console.error(`Package '${pkg.name}' produced invalid result for ${suite.description} -> ${test.description}.`);
		}
		catch (e)
		{
			console.error(`Package '${pkg.name}' threw an error for ${suite.description} -> ${test.description}:\n${e.message || e}.`);
		}
		return false;
	});

	if (passed)
	{
		bench.add(pkg.name, () => eachTest(test =>
		{
			pkg.fn(test.value1, test.value2);
			return true;
		}));
		console.log(`- Package '${pkg.name}' passed.`);
	}
}

// run the benchmark
console.log('\nRunning benchmarks:');
bench
	.on('cycle', e => console.log(String(e.target)))
	.on('complete', () => console.log(`\nComplete, fastest run: ${bench.filter('fastest').map('name')}.`))
	.run({ async : true });
