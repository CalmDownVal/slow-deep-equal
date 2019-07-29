import Features from '../Features.mjs';

export default
{
	description: 'Typed arrays',
	features: Features.ES6_TYPED,
	tests:
	[
		{
			description: 'two empty arrays of the same class are equal',
			value1: new Int32Array([]),
			value2: new Int32Array([]),
			equal: true
		},
		{
			description: 'two empty arrays of the different class are not equal',
			value1: new Int32Array([]),
			value2: new Int16Array([]),
			equal: false
		},
		{
			description: 'equal arrays',
			value1: new Int32Array([1, 2, 3]),
			value2: new Int32Array([1, 2, 3]),
			equal: true
		},
		{
			description: 'not equal arrays (same items, different class)',
			value1: new Int32Array([1, 2, 3]),
			value2: new Int16Array([1, 2, 3]),
			equal: false
		},
		{
			description: 'not equal arrays (different item)',
			value1: new Int32Array([1, 2, 3]),
			value2: new Int32Array([1, 2, 4]),
			equal: false
		},
		{
			description: 'not equal arrays (different length)',
			value1: new Int32Array([1, 2, 3]),
			value2: new Int32Array([1, 2]),
			equal: false
		},
		{
			description: 'pseudo array and equivalent typed array are not equal',
			value1: {'0': 1, '1': 2, length: 2},
			value2: new Int32Array([1, 2]),
			equal: false
		}
	]
};
