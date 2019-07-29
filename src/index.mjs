const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;
const valueOf = Object.prototype.valueOf;

function count(obj)
{
	let n = 0;
	for (const _ in obj) // eslint-disable-line no-unused-vars
	{
		++n;
	}
	return n;
}

function getKeys(map, size = 0)
{
	const keys = new Array(size);
	const it = map[Symbol.iterator]();

	let next;
	let index = 0;
	while (!(next = it.next()).done)
	{
		keys[index++] = next.value[0];
	}

	return keys;
}

function getValues(set, size = 0)
{
	const keys = new Array(size);
	const it = set[Symbol.iterator]();

	let next;
	let index = 0;
	while (!(next = it.next()).done)
	{
		keys[index++] = next.value;
	}

	return keys;
}

let stack;
function detectLoop(obj, currentStack)
{
	if (currentStack)
	{
		const length = currentStack.length;
		const next = new Array(length + 1);
		for (let i = 0; i !== length; ++i)
		{
			const tmp = currentStack[i];
			if (tmp === obj)
			{
				return i;
			}
			next[i] = tmp;
		}
		next[length] = obj;
		stack = next;
	}
	else
	{
		stack = [ obj ];
	}
	return -1;
}

export default function equal(a, b, circularChecks = true, _aStack, _bStack)
{
	if (a === b)
	{
		return true;
	}

	if (circularChecks === true)
	{
		const loopA = detectLoop(a, _aStack);
		_aStack = stack;

		const loopB = detectLoop(b, _bStack);
		_bStack = stack;

		if (loopA !== -1 || loopB !== -1)
		{
			return loopA === loopB;
		}
	}

	if (a && b && typeof a === 'object' && typeof b === 'object')
	{
		if (a.constructor !== b.constructor)
		{
			return false;
		}

		if (Array.isArray(a))
		{
			const length = a.length;
			if (length !== b.length)
			{
				return false;
			}

			for (let i = 0; i !== length; ++i)
			{
				if (!equal(a[i], b[i], circularChecks, _aStack, _bStack))
				{
					return false;
				}
			}

			return true;
		}

		if (a instanceof Map)
		{
			const length = a.size;
			if (length !== b.size)
			{
				return false;
			}

			const keys = getKeys(a, length);
			for (let i = 0; i !== length; ++i)
			{
				if (!b.has(keys[i]))
				{
					return false;
				}
			}

			for (let i = 0; i !== length; ++i)
			{
				const key = keys[i];
				if (!equal(a.get(key), b.get(key)))
				{
					return false;
				}
			}

			return true;
		}

		if (a instanceof Set)
		{
			const length = a.size;
			if (length !== b.size)
			{
				return false;
			}

			const keys = getValues(a, length);
			for (let i = 0; i !== length; ++i)
			{
				if (!b.has(keys[i]))
				{
					return false;
				}
			}

			return true;
		}

		if (a.constructor.BYTES_PER_ELEMENT && (
			a instanceof Int8Array ||
			a instanceof Uint8Array ||
			a instanceof Uint8ClampedArray ||
			a instanceof Int16Array ||
			a instanceof Uint16Array ||
			a instanceof Int32Array ||
			a instanceof Uint32Array ||
			a instanceof Float32Array ||
			a instanceof Float64Array ||
			a instanceof BigInt64Array ||
			a instanceof BigUint64Array
		)) {
			const length = a.length;
			if (length !== b.length)
			{
				return false;
			}

			for (let i = 0; i !== length; ++i)
			{
				if (a[i] !== b[i])
				{
					return false;
				}
			}

			return true;
		}

		if (a.constructor === RegExp)
		{
			return a.source === b.source && a.flags === b.flags;
		}

		if (a.valueOf !== valueOf)
		{
			return a.valueOf() === b.valueOf();
		}

		if (a.toString !== toString)
		{
			return a.toString() === b.toString();
		}

		const keys = Object.keys(a);
		const length = keys.length;
		if (length !== count(b))
		{
			return false;
		}

		for (let i = 0; i !== length; ++i)
		{
			if (!hasOwnProperty.call(b, keys[i]))
			{
				return false;
			}
		}

		for (let i = 0; i !== length; ++i)
		{
			const key = keys[i];
			if (!equal(a[key], b[key], circularChecks, _aStack, _bStack))
			{
				return false;
			}
		}

		return true;
	}

	// true if both NaN, false otherwise
	return a !== a && b !== b;
}
