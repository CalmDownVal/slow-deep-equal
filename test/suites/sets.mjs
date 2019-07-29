import Features from '../Features.mjs';

class MySet extends Set {}

function set(arr, Class)
{
	const a = new (Class || Set);
	for (const value of arr)
	{
		a.add(value);
	}
	return a;
}

function mySet(arr)
{
	return set(arr, MySet);
}

const emptyObj = {};

export default
{
	description: 'Sets',
	features: Features.ES6_SET,
	tests:
	[
		{
			description: 'empty sets are equal',
			value1: new Set,
			value2: new Set,
			equal: true
		},
		{
			description: 'empty sets of different class are not equal',
			value1: new Set,
			value2: new MySet,
			equal: false
		},
		{
			description: 'equal sets (same value "order")',
			value1: set(['a', 'b']),
			value2: set(['a', 'b']),
			equal: true
		},
		{
			description: 'not equal sets (same value "order" - instances of different classes)',
			value1: set(['a', 'b']),
			value2: mySet(['a', 'b']),
			equal: false
		},
		{
			description: 'equal sets (different value "order")',
			value1: set(['a', 'b']),
			value2: set(['b', 'a']),
			equal: true
		},
		{
			description: 'equal sets (different value "order" - instances of the same subclass)',
			value1: mySet(['a', 'b']),
			value2: mySet(['b', 'a']),
			equal: true
		},
		{
			description: 'not equal sets (extra value)',
			value1: set(['a', 'b']),
			value2: set(['a', 'b', 'c']),
			equal: false
		},
		{
			description: 'not equal sets (different values)',
			value1: set(['a', 'b', 'c']),
			value2: set(['a', 'b', 'd']),
			equal: false
		},
		{
			description: 'not equal sets (different instances of objects)',
			value1: set([ 'a', {} ]),
			value2: set([ 'a', {} ]),
			equal: false
		},
		{
			description: 'equal sets (same instances of objects)',
			value1: set([ 'a', emptyObj ]),
			value2: set([ 'a', emptyObj ]),
			equal: true
		},
		{
			description: 'empty set and empty object are not equal',
			value1: {},
			value2: new Set,
			equal: false
		},
		{
			description: 'empty set and empty array are not equal',
			value1: [],
			value2: new Set,
			equal: false
		},
		{
			description: 'set with extra undefined value is not equal #1',
			value1: set([]),
			value2: set([undefined]),
			equal: false
		},
		{
			description: 'set with extra undefined value is not equal #2',
			value1: set([undefined]),
			value2: set([]),
			equal: false
		}
	]
};
