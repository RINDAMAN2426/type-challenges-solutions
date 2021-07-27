import { Equal, Expect } from "@type-challenges/utils";

type Awaited<T> = T extends Promise<infer U> ? U : error;

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>
];

// @ts-expect-error
type error = Awaited<number>;
