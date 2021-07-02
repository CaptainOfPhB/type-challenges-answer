type DropString<S, R extends string, R2 extends string = GetSubstrAfter<R, GetFirstChar<R>>> = R extends `${infer F}${infer anything}`
  ? S extends `${infer S1}${F}${infer S2}`
    ? DropString<`${S1}${S2}`, F, R2>
    : DropString<S, R2>
  : S;

type GetFirstChar<S> = S extends `${infer F}${infer anything}` ? F : S;
type GetSubstrAfter<S, Substr extends string> = S extends `${Substr}${infer After}` ? After : S;

/* _____________ Test Cases _____________ */

import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]
