type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]
