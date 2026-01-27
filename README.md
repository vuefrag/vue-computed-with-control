<p align="center">
  <img src="logo.svg" alt="vue-computed-with-control" width="180" />
</p>

<h1 align="center">vue-computed-with-control</h1>

<p align="center">A Vue 3 composition API utility that lets you explicitly control computed property updates with manual trigger functions and dependency tracking. Provides fine-grained control over when computations re-run.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-computed-with-control"><img src="https://img.shields.io/npm/v/vue-computed-with-control.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-computed-with-control"><img src="https://img.shields.io/npm/dm/vue-computed-with-control.svg" alt="npm downloads" /></a>
  <a href="https://github.com/vuefrag/vue-computed-with-control/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vue-computed-with-control.svg" alt="license" /></a>
</p>


## Installation

```bash
npm install vue-computed-with-control
```

## Usage

```ts
import { computedWithControl } from 'vue-computed-with-control';
```

Explicitly define the dependencies of computed.

```ts
import { computedWithControl } from 'vue-computed-with-control'

const source = ref('foo')
const counter = ref(0)

const computedRef = computedWithControl(
  () => source.value, // watch source, same as `watch`
  () => counter.value, // computed getter, same as `computed`
)
```

With this, the changes of `counter` won't trigger `computedRef` to update but the `source` ref does.

```ts
console.log(computedRef.value) // 0

counter.value += 1

console.log(computedRef.value) // 0

source.value = 'bar'

console.log(computedRef.value) // 1
```

### Manual Triggering

You can also manually trigger the update of the computed by:

```ts
const computedRef = computedWithControl(
  () => source.value,
  () => counter.value,
)

computedRef.trigger()
```

### Deep Watch

Unlike `computed`, `computedWithControl` is shallow by default.
You can specify the same options as `watch` to control the behavior:

```ts
const source = ref({ name: 'foo' })

const computedRef = computedWithControl(
  source,
  () => counter.value,
  { deep: true },
)
```

> Extracted from [VueUse](https://vueuse.org/) for standalone use.


## License

MIT
