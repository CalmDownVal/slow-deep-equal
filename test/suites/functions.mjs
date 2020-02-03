function func1() {}
function func2() {}

export const functions =
{
	description: 'functions',
	tests:
	[
		{
			description: 'same function is equal',
			value1: func1,
			value2: func1,
			equal: true
		},
		{
			description: 'different functions are not equal',
			value1: func1,
			value2: func2,
			equal: false
		}
	]
};
