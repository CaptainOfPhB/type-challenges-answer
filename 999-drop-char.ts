type DropChar<S, R extends string> = S extends `${infer S1}${R}${infer S2}` ? DropChar<`${S1}${S2}`, R> : S;


/* _____________ Test Cases _____________ */

import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]
