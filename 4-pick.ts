type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


/* _____________ 思路 _____________ */

/**
 * 观察测试用例可以发现，第一个泛型 T 为 interface，第二个泛型 K 为联合类型，也是前面 interface 的 key。
 * 那么利用 keyof interface 可以获取到 interface 的所有的 key 这个特性，将 K 改写为 "K extends keyof T"，即表示 K 为 T 的所有 key 的集合。
 * 再利用 [k in K]，k 即为 K 中的每一项（类似 JS 中数组循环中的每一项元素），然后值类型为 T[k] 即可（取 T 中与 k 对应的 key 的类型）。
 */