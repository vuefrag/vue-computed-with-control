import { ComputedRef, WritableComputedRef, WatchSource, MultiWatchSources, ComputedGetter, WatchOptions, WritableComputedOptions } from 'vue';

interface ComputedWithControlRefExtra {
    /**
     * Force update the computed value.
     */
    trigger: () => void;
}
interface ComputedRefWithControl<T> extends ComputedRef<T>, ComputedWithControlRefExtra {
}
interface WritableComputedRefWithControl<T> extends WritableComputedRef<T>, ComputedWithControlRefExtra {
}
type ComputedWithControlRef<T = any> = ComputedRefWithControl<T> | WritableComputedRefWithControl<T>;
declare function computedWithControl<T>(source: WatchSource | MultiWatchSources, fn: ComputedGetter<T>, options?: WatchOptions): ComputedRefWithControl<T>;
declare function computedWithControl<T>(source: WatchSource | MultiWatchSources, fn: WritableComputedOptions<T>, options?: WatchOptions): WritableComputedRefWithControl<T>;
/** @deprecated use `computedWithControl` instead */
declare const controlledComputed: typeof computedWithControl;

export { computedWithControl, controlledComputed };
export type { ComputedRefWithControl, ComputedWithControlRef, ComputedWithControlRefExtra, WritableComputedRefWithControl };
