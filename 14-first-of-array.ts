type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]


/* _____________ 思路 _____________ */

/**
 * 利用 infer 表示待推断的类型，可以将数组第一个元素表示为 infer F，然后剩下的元素表示为 ...any[]
 * 这样 TS 会自动带入类型计算出 F 的类型
 * 同理，也可以推导出最后一个元素的类型
 */