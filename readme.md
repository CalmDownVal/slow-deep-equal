# Deep Equal

A deep-equality module with support for ES6 stuff (Map, Set & typed arrays) and
circular structures. Based on
[fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) module by
Evgeny Poberezkin (MIT license).

## Installation

```sh
npm install @calmdownval/slow-deep-equal
```

## Usage

The module exports one function (named export) with the signature:

```ts
function equal(a: any, b: any, circularChecks: boolean = true): boolean
```

If you only need to check for circular structures in certain scenarios, you can
disable the costly detection dynamically by passing `false` to the third
argument and juice out some extra performance this way.

## Testing & Benchmark

```sh
npm test
npm run benchmark
```

With disabled circular checks, benchmarks run basically equal to
`fast-deep-equal/es6`. With the checks enabled the performance, obviously,
goes down a little.

```txt
fast-deep-equal                   x 240,454 ops/sec ±0.74% (89 runs sampled)
fast-deep-equal/es6               x 194,209 ops/sec ±0.74% (86 runs sampled)
slow-deep-equal (no checks)       x 193,884 ops/sec ±0.88% (84 runs sampled)
slow-deep-equal (circular checks) x 115,863 ops/sec ±0.98% (89 runs sampled)
```
