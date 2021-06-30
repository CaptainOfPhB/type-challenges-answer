type Trim<S extends string> = S extends ` ${infer R}`
  ? Trim<R>
  : S extends `${infer F} `
    ? Trim<F>
    : S extends `${infer N1}\n${infer N2}`
      ? Trim<`${N1}${N2}`>
      : S extends `${infer T1}\t${infer T2}`
        ? Trim<`${T1}${T2}`>
        : S;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]






