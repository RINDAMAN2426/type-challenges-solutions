import { Equal, Expect } from "@type-challenges/utils";

/**
 * @link [Key Remapping](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)
 */
type MyOmit<T, K> = { [key in keyof T as key extends K ? never : key]: T[key] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];
