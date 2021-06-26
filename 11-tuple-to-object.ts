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


/* _____________ Key _____________ */

// A easy way to get the element type of array/tuple is: T[number]

const array1 = [1, true, 'abc']; 
type Array1EleType = (typeof array1)[number]; // string | number | boolean

const array2 = [1, true, 'abc'] as const; 
type Array2EleType = (typeof array2)[number]; // true | 1 | 'abc'