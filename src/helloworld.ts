import { Expect, Equal, NotAny } from "@type-challenges/utils";

type HelloWorld = string;

/** test cases */
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
