import { Equal, Expect } from "@type-challenges/utils";

/**
 * @see @fangyang921017 solutions
 * @link https://github.com/type-challenges/type-challenges/issues/2066
 */
type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<U>() => U extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly unknown[], U> = true extends {
  [P in keyof T]: MyEqual<T[P], U> 
}[number] ? true : false;

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { a: "A" }>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>
];

type A = Includes<[{ a: "A" }], { a: "A" }>;
