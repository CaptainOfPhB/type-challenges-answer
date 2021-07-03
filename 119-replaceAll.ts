type ReplaceAll<S extends string, From extends string, To extends string, Start extends boolean = false> = From extends ''
  ? S
  : Start extends false
    ? S extends `${infer L}${From}${infer R}`
      ? ReplaceAll<`${L}${Placeholder}${R}`, From, To>
      : ReplaceAll<S, Placeholder, To, true>
    : S extends `${infer L}${From}${infer R}`
      ? ReplaceAll<`${L}${To}${R}`, From, To, true>
      : S

type Placeholder = '{{}}';

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]