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


/* _____________ 思路 _____________ */

// 一个快速获取数组/元组中元素的方法是：T[number]
// 注意加了 as const 之后的区别
// 使用 typeof 可以将 JS 方便的转换为 TS

const array1 = [1, true, 'abc']; 
type TypeofArray1 = typeof array1; // (string | number | boolean)[]
type Array1EleType = TypeofArray1[number]; // string | number | boolean

const array2 = [1, true, 'abc'] as const; 
type TypeofArray2 = typeof array2; // readonly [1, true, 'abc']
type Array2EleType = (typeof array2)[number]; // true | 1 | 'abc'