type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
}