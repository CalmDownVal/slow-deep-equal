# Deep Equal
**This module uses the ES modules feature and requires Node v8.15.0+.
Please refer to [Node's documentation](https://nodejs.org/api/esm.html#esm_enabling) to read
more on how to enable this functionality in your environment.**

A deep-equality module with support for ES6 stuff (Map, Set & typed arrays) and circular structures.
Based on [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) module
by Evgeny Poberezkin.

## Installation
```sh
npm install @calmdownval/slow-deep-equal
```

## Usage
The module exports one function with the signature:
```ts
function equal(a: any, b: any, circularChecks: boolean = true): boolean
```
If you only need to check for circular structures in certain scenarios, you can disable the costly
detection by passing `false` as the third argument and juice out some extra performance this way.

## Testing & Benchmark
```sh
npm test
npm run benchmark
```
With disabled circular checks, benchmarks run very close to `fast-deep-equal/es6`. With the checks
enabled the performance obviously degrades.
```txt
slow-deep-equal (no checks) x 193,884 ops/sec ±0.88% (84 runs sampled)
slow-deep-equal (circular checks) x 115,863 ops/sec ±0.98% (89 runs sampled)
fast-deep-equal/es6 x 194,209 ops/sec ±0.74% (86 runs sampled)
fast-deep-equal x 240,454 ops/sec ±0.74% (89 runs sampled)
```
