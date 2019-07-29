import Features from '../Features.mjs';

const circular1 =
{
	lorem:
	[
		'ipsum',
		'dolor'
	]
};
circular1.lorem.push(circular1);

const circular2 =
{
	lorem:
	[
		'ipsum',
		'dolor'
	]
};
circular2.lorem.push(circular2);

const circular3 =
{
	lorem:
	[
		'ipsum',
		null,
		'dolor'
	]
};
circular3.lorem[1] = circular3;

export default
{
	description: 'circular structures',
	features: Features.CIRCULAR,
	tests:
	[
		{
			description: 'the same structure with equal values equals',
			value1: circular1,
			value2: circular2,
			equal: true
		},
		{
			description: 'different structure breaks equity',
			value1: circular1,
			value2: circular3,
			equal: false
		}
	]
};
