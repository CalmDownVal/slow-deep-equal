export default
{
	description: 'arrays',
	tests:
	[
		{
			description: 'two empty arrays are equal',
			value1: [],
			value2: [],
			equal: true
		},
		{
			description: 'equal arrays',
			value1: [1, 2, 3],
			value2: [1, 2, 3],
			equal: true
		},
		{
			description: 'not equal arrays (different item)',
			value1: [1, 2, 3],
			value2: [1, 2, 4],
			equal: false
		},
		{
			description: 'not equal arrays (different length)',
			value1: [1, 2, 3],
			value2: [1, 2],
			equal: false
		},
		{
			description: 'equal arrays of objects',
			value1: [{ a: 'a' }, { b: 'b' }],
			value2: [{ a: 'a' }, { b: 'b' }],
			equal: true
		},
		{
			description: 'not equal arrays of objects',
			value1: [{ a: 'a' }, { b: 'b' }],
			value2: [{ a: 'a' }, { b: 'c' }],
			equal: false
		},
		{
			description: 'pseudo array and equivalent array are not equal',
			value1: { '0': 0, '1': 1, length: 2 },
			value2: [0, 1],
			equal: false
		}
	]
};
