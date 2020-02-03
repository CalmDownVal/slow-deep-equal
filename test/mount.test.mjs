/* eslint-env mocha */
import { strictEqual } from 'assert';
import { suites } from './suites/index.mjs';
import slowDeepEqual from '../src/index.cjs';

for (const suite of suites)
{
	describe(suite.description, () =>
	{
		for (const test of suite.tests)
		{
			it(test.description, () =>
			{
				const actual = slowDeepEqual(test.value1, test.value2);
				strictEqual(actual, test.equal);
			});
		}
	});
}
