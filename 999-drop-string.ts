declare function drop<S, R extends string>(searchValue: S, replaceValue: R): Drop<S, R>;
type Drop<S, R extends string> = S extends `${infer S1}${R}${infer S2}` ? Drop<`${S1}${S2}`, R> : S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const dropString1 = drop('butter fly!', ' ' as const);
const dropString2 = drop('    butter fly!        ', ' ' as const);
const dropString3 = drop(' b u t t e r f l y ! ', ' ' as const);

type cases = [
  Expect<Equal<typeof dropString1, 'butterfly!'>>,
  Expect<Equal<typeof dropString2, 'butterfly!'>>,
  Expect<Equal<typeof dropString3, 'butterfly!'>>,
]
