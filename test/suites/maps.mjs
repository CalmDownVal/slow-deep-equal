import Features from '../Features.mjs';

class MyMap extends Map {}

function map(obj, Class)
{
	const a = new (Class || Map);
	for (var key in obj)
	{
		a.set(key, obj[key]);
	}
	return a;
}

function myMap(obj)
{
	return map(obj, MyMap);
}

export default
{
	description: 'Maps',
	features: Features.ES6_MAP,
	tests:
	[
		{
			description: 'empty maps are equal',
			value1: new Map,
			value2: new Map,
			equal: true
		},
		{
			description: 'empty maps of different class are not equal',
			value1: new Map,
			value2: new MyMap,
			equal: false
		},
		{
			description: 'equal maps (same key "order")',
			value1: map({a: 1, b: '2'}),
			value2: map({a: 1, b: '2'}),
			equal: true
		},
		{
			description: 'not equal maps (same key "order" - instances of different classes)',
			value1: map({a: 1, b: '2'}),
			value2: myMap({a: 1, b: '2'}),
			equal: false
		},
		{
			description: 'equal maps (different key "order")',
			value1: map({a: 1, b: '2'}),
			value2: map({b: '2', a: 1}),
			equal: true
		},
		{
			description: 'equal maps (different key "order" - instances of the same subclass)',
			value1: myMap({a: 1, b: '2'}),
			value2: myMap({b: '2', a: 1}),
			equal: true
		},
		{
			description: 'not equal maps (extra key)',
			value1: map({a: 1, b: '2'}),
			value2: map({a: 1, b: '2', c: []}),
			equal: false
		},
		{
			description: 'not equal maps (different key value)',
			value1: map({a: 1, b: '2', c: 3}),
			value2: map({a: 1, b: '2', c: 4}),
			equal: false
		},
		{
			description: 'not equal maps (different keys)',
			value1: map({a: 1, b: '2', c: 3}),
			value2: map({a: 1, b: '2', d: 3}),
			equal: false
		},
		{
			description: 'equal maps (same sub-keys)',
			value1: map({ a: [ map({ b: 'c' }) ] }),
			value2: map({ a: [ map({ b: 'c' }) ] }),
			equal: true
		},
		{
			description: 'not equal maps (different sub-key value)',
			value1: map({ a: [ map({ b: 'c' }) ] }),
			value2: map({ a: [ map({ b: 'd' }) ] }),
			equal: false
		},
		{
			description: 'not equal maps (different sub-key)',
			value1: map({ a: [ map({ b: 'c' }) ] }),
			value2: map({ a: [ map({ c: 'c' }) ] }),
			equal: false
		},
		{
			description: 'empty map and empty object are not equal',
			value1: {},
			value2: new Map,
			equal: false
		},
		{
			description: 'map with extra undefined key is not equal #1',
			value1: map({}),
			value2: map({foo: undefined}),
			equal: false
		},
		{
			description: 'map with extra undefined key is not equal #2',
			value1: map({foo: undefined}),
			value2: map({}),
			equal: false
		},
		{
			description: 'maps with extra undefined keys are not equal #3',
			value1: map({foo: undefined}),
			value2: map({bar: undefined}),
			equal: false
		},
		{
			description: 'null and empty map are not equal',
			value1: null,
			value2: new Map,
			equal: false
		},
		{
			description: 'undefined and empty map are not equal',
			value1: undefined,
			value2: new Map,
			equal: false
		}
	]
};
