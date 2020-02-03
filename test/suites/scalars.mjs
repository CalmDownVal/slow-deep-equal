export const scalars =
{
	description: 'scalars',
	tests:
	[
		{
			description: 'equal numbers',
			value1: 1,
			value2: 1,
			equal: true
		},
		{
			description: 'not equal numbers',
			value1: 1,
			value2: 2,
			equal: false
		},
		{
			description: 'number and array are not equal',
			value1: 1,
			value2: [],
			equal: false
		},
		{
			description: '0 and null are not equal',
			value1: 0,
			value2: null,
			equal: false
		},
		{
			description: 'equal strings',
			value1: 'a',
			value2: 'a',
			equal: true
		},
		{
			description: 'not equal strings',
			value1: 'a',
			value2: 'b',
			equal: false
		},
		{
			description: 'empty string and null are not equal',
			value1: '',
			value2: null,
			equal: false
		},
		{
			description: 'null is equal to null',
			value1: null,
			value2: null,
			equal: true
		},
		{
			description: 'equal booleans (true)',
			value1: true,
			value2: true,
			equal: true
		},
		{
			description: 'equal booleans (false)',
			value1: false,
			value2: false,
			equal: true
		},
		{
			description: 'not equal booleans',
			value1: true,
			value2: false,
			equal: false
		},
		{
			description: '1 and true are not equal',
			value1: 1,
			value2: true,
			equal: false
		},
		{
			description: '0 and false are not equal',
			value1: 0,
			value2: false,
			equal: false
		},
		{
			description: 'NaN and NaN are equal',
			value1: NaN,
			value2: NaN,
			equal: true
		},
		{
			description: '0 and -0 are equal',
			value1: 0,
			value2: -0,
			equal: true
		},
		{
			description: 'Infinity and Infinity are equal',
			value1: Infinity,
			value2: Infinity,
			equal: true
		},
		{
			description: 'Infinity and -Infinity are not equal',
			value1: Infinity,
			value2: -Infinity,
			equal: false
		}
	]
};
