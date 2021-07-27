import { Equal, Expect } from "@type-challenges/utils";

type If<B extends boolean, T, U> = B extends true ? T : U;

// extend
// type If<B, T, U> = B extends boolean ? (B extends true ? T : U) : never;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", "b">, "b">>
];
