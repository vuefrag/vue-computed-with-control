# vue-computed-with-control

Computed with manual control

> Extracted from [VueUse](https://vueuse.org/) for standalone use.

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
import { ref } from 'vue';
import { computedWithControl } from 'vue-computed-with-control';

const source = ref('foo');
const counter = ref(0);

const computedRef = computedWithControl(
  () => source.value, // watch source, same as `watch`
  () => counter.value, // computed getter, same as `computed`
);

console.log(computedRef.value); // 0

counter.value += 1;

console.log(computedRef.value); // 0 (counter change doesn't trigger update)

source.value = 'bar';

console.log(computedRef.value); // 1 (source change triggers update)
```

### Manual Triggering

You can also manually trigger the update of the computed by:

```ts
computedRef.trigger();
```

### Deep Watch

Unlike `computed`, `computedWithControl` is shallow by default.
You can specify the same options as `watch` to control the behavior:

```ts
const source = ref({ name: 'foo' });

const computedRef = computedWithControl(
  source,
  () => counter.value,
  { deep: true },
);
```

## License

MIT
