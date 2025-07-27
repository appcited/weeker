import { curry as ramdaCurry } from "ramda"

type CurryFunction1<T1, R> = (arg1: T1) => R

type CurryFunction2<T1, T2, R> = (arg1: T1) => CurryFunction1<T2, R>

type CurryFunction3<T1, T2, T3, R> = (arg1: T1) => CurryFunction2<T2, T3, R>

type CurryFunction4<T1, T2, T3, T4, R> = (
  arg1: T1,
) => CurryFunction3<T2, T3, T4, R>

type CurryFunction5<T1, T2, T3, T4, T5, R> = (
  arg1: T1,
) => CurryFunction4<T2, T3, T4, T5, R>

type CurryFunction6<T1, T2, T3, T4, T5, T6, R> = (
  arg1: T1,
) => CurryFunction5<T2, T3, T4, T5, T6, R>

// variadic curry functions do not support generic input functions
// e.g. https://github.com/ramda/types/blob/develop/types/curry.d.ts
export function curry<T1, R>(fn: (arg1: T1) => R): CurryFunction1<T1, R>
export function curry<T1, T2, R>(
  fn: (arg1: T1, arg2: T2) => R,
): CurryFunction2<T1, T2, R>
export function curry<T1, T2, T3, R>(
  fn: (arg1: T1, arg2: T2, arg3: T3) => R,
): CurryFunction3<T1, T2, T3, R>
export function curry<T1, T2, T3, T4, R>(
  fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R,
): CurryFunction4<T1, T2, T3, T4, R>
export function curry<T1, T2, T3, T4, T5, R>(
  fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R,
): CurryFunction5<T1, T2, T3, T4, T5, R>
export function curry<T1, T2, T3, T4, T5, T6, R>(
  fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => R,
): CurryFunction6<T1, T2, T3, T4, T5, T6, R>

export function curry(fn: (...args: unknown[]) => unknown) {
  return ramdaCurry(fn)
}
