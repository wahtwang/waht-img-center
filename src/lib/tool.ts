
export function onceFunction<T extends unknown[], U> (fn: (...args: T) => U): (...args: T) => U | void {
  let once = true
  return function (...args): U|void {
    if (once) {
      once = false
      if (fn instanceof Function) {
        return fn(...args)
      }
    }
  }
}
