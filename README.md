<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-computed-with-control/main/banner.svg" alt="vue-computed-with-control" width="100%" />
</p>

<h1 align="center">vue-computed-with-control</h1>

<p align="center">A Vue 3 composition API utility that lets you explicitly control computed property updates with manual trigger functions and dependency tracking. Provides fine-grained control over when computations re-run.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-computed-with-control"><img src="https://img.shields.io/npm/v/vue-computed-with-control.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-computed-with-control"><img src="https://img.shields.io/npm/dm/vue-computed-with-control.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-computed-with-control
```

## Usage

```ts
import { computedWithControl } from 'vue-computed-with-control'
import { ref } from 'vue'

const source = ref('foo')
const counter = ref(0)

const computedRef = computedWithControl(
  () => source.value,
  () => {
    counter.value++
  }
)

console.log(computedRef.value) // 'foo'
console.log(counter.value) // 1
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
