type DropString<Str, Chars extends string, RestChars extends string = ShiftString<Chars>> = Chars extends `${infer FirstChar}${infer anything}`
  ? Str extends `${infer Left}${FirstChar}${infer Right}`
    ? DropString<`${Left}${Right}`, FirstChar, RestChars>
    : DropString<Str, RestChars>
  : Str;

type GetFirstChar<Str> = Str extends `${infer FirstChar}${infer Anything}` ? FirstChar : Str;
type GetRestChars<Str, Substr extends string> = Str extends `${Substr}${infer RestChars}` ? RestChars : Str;

type ShiftString<S extends string> = GetRestChars<S, GetFirstChar<S>>;

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
