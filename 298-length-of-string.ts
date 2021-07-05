type LengthOfString<S extends string> = StringToTuple<S> extends { length: infer L } ? L : never;
type StringToTuple<S extends string> = S extends `${infer F}${infer R}` ? [F, ...StringToTuple<R>] : [];


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
