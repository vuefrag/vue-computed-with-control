import { watch, customRef } from 'vue';

function computedWithControl(source, fn, options = {}) {
  let v = void 0;
  let track;
  let trigger;
  let dirty = true;
  const update = () => {
    dirty = true;
    trigger();
  };
  watch(source, update, { flush: "sync", ...options });
  const get = typeof fn === "function" ? fn : fn.get;
  const set = typeof fn === "function" ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty) {
          v = get(v);
          dirty = false;
        }
        track();
        return v;
      },
      set(v2) {
        set?.(v2);
      }
    };
  });
  result.trigger = update;
  return result;
}
const controlledComputed = computedWithControl;

export { computedWithControl, controlledComputed };
