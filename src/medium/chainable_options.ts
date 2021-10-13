type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<{
    [P in K | keyof T]: P extends K ? V : P extends keyof T ? T[P] : unknown;
  }>;
  get(): T;
};

/* _____________ Test Cases _____________ */
import { Alike, Expect } from "@type-challenges/utils";

declare const a: Chainable;

const result = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

type cases = [Expect<Alike<typeof result, Expected>>];

type Expected = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};
