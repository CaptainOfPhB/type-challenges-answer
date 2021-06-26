type TupleToObject<T extends readonly string[]> = {
  [K in T[number]]: K;
}


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


/* _____________ My _____________ */
// Tip: a easy way to get the element type of array/tuple is: T[number]
// type Typle = [1, true, 'abc']; 