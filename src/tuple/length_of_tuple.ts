import { Equal, Expect } from "@type-challenges/utils";

type Length<T> = T extends Array<unknown> ? T["length"] : never;

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];
type isNever = "string";

type cases = [
  Expect<Equal<Length<tesla>, 4>>,
  Expect<Equal<Length<spaceX>, 5>>,
  Expect<Equal<Length<isNever>, never>>
];
