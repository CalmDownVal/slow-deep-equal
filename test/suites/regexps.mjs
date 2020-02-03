export const regexps =
{
	description: 'RegExp objects',
	tests:
	[
		{
			description: 'equal RegExp objects',
			value1: /foo/,
			value2: /foo/,
			equal: true
		},
		{
			description: 'not equal RegExp objects (different pattern)',
			value1: /foo/,
			value2: /bar/,
			equal: false
		},
		{
			description: 'not equal RegExp objects (different flags)',
			value1: /foo/,
			value2: /foo/i,
			equal: false
		},
		{
			description: 'RegExp and string are not equal',
			value1: /foo/,
			value2: 'foo',
			equal: false
		},
		{
			description: 'RegExp and object are not equal',
			value1: /foo/,
			value2: {},
			equal: false
		}
	]
};
