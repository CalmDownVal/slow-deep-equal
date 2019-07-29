/* eslint-env mocha */
import { strictEqual } from 'assert';
import equal from '../src/index.mjs';
import suites from './suites/index.mjs';

for (const suite of suites)
{
	describe(suite.description, () =>
	{
		for (const test of suite.tests)
		{
			it(test.description, () =>
			{
				const actual = equal(test.value1, test.value2);
				strictEqual(actual, test.equal);
			});
		}
	});
}
