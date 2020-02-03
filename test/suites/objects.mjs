export const objects =
{
	description: 'objects',
	tests:
	[
		{
			description: 'empty objects are equal',
			value1: {},
			value2: {},
			equal: true
		},
		{
			description: 'equal objects (same properties "order")',
			value1: { a: 1, b: '2' },
			value2: { a: 1, b: '2' },
			equal: true
		},
		{
			description: 'equal objects (different properties "order")',
			value1: { a: 1, b: '2' },
			value2: { b: '2', a: 1 },
			equal: true
		},
		{
			description: 'not equal objects (extra property)',
			value1: { a: 1, b: '2' },
			value2: { a: 1, b: '2', c: [] },
			equal: false
		},
		{
			description: 'not equal objects (different property values)',
			value1: { a: 1, b: '2', c: 3 },
			value2: { a: 1, b: '2', c: 4 },
			equal: false
		},
		{
			description: 'not equal objects (different properties)',
			value1: { a: 1, b: '2', c: 3 },
			value2: { a: 1, b: '2', d: 3 },
			equal: false
		},
		{
			description: 'equal objects (same sub-properties)',
			value1: { a: [{ b: 'c' }] },
			value2: { a: [{ b: 'c' }] },
			equal: true
		},
		{
			description: 'not equal objects (different sub-property value)',
			value1: { a: [{ b: 'c' }] },
			value2: { a: [{ b: 'd' }] },
			equal: false
		},
		{
			description: 'not equal objects (different sub-property)',
			value1: { a: [{ b: 'c' }] },
			value2: { a: [{ c: 'c' }] },
			equal: false
		},
		{
			description: 'empty array and empty object are not equal',
			value1: {},
			value2: [],
			equal: false
		},
		{
			description: 'object with extra undefined properties are not equal #1',
			value1: {},
			value2: { foo: undefined },
			equal: false
		},
		{
			description: 'object with extra undefined properties are not equal #2',
			value1: { foo: undefined },
			value2: {},
			equal: false
		},
		{
			description: 'object with extra undefined properties are not equal #3',
			value1: { foo: undefined },
			value2: { bar: undefined },
			equal: false
		},
		{
			description: 'nulls are equal',
			value1: null,
			value2: null,
			equal: true
		},
		{
			description: 'null and undefined are not equal',
			value1: null,
			value2: undefined,
			equal: false
		},
		{
			description: 'null and empty object are not equal',
			value1: null,
			value2: {},
			equal: false
		},
		{
			description: 'undefined and empty object are not equal',
			value1: undefined,
			value2: {},
			equal: false
		}
	]
};
