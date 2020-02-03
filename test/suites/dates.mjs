export const dates =
{
	description: 'Date objects',
	tests:
	[
		{
			description: 'equal date objects',
			value1: new Date('2017-06-16T21:36:48.362Z'),
			value2: new Date('2017-06-16T21:36:48.362Z'),
			equal: true
		},
		{
			description: 'not equal date objects',
			value1: new Date('2017-06-16T21:36:48.362Z'),
			value2: new Date('2017-01-01T00:00:00.000Z'),
			equal: false
		},
		{
			description: 'date and string are not equal',
			value1: new Date('2017-06-16T21:36:48.362Z'),
			value2: '2017-06-16T21:36:48.362Z',
			equal: false
		},
		{
			description: 'date and object are not equal',
			value1: new Date('2017-06-16T21:36:48.362Z'),
			value2: {},
			equal: false
		}
	]
};
