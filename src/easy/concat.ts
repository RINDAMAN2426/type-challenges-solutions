import { Equal, Expect } from "@type-challenges/utils";

/**
 * @link [TS 4.0 tuple](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html)
 */
type Concat<T extends Array<unknown>, U extends Array<unknown>> = [...T, ...U];

type A = Concat<[], [1]>;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];
