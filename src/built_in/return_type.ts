import { Expect, Equal } from "@type-challenges/utils";

type MyReturnType<T> = T extends (...args: any) => infer U ? U : any;

/**
 * @see https://www.typescriptlang.org/play?#code/PQKgUABBBMELQQOIFMAuEBKaCuAnAdhACoCeADspPHDbVQEYkQCC+qAFgPb5MBi2EABQABAIZsAZtgCUEAMQBbZABMAltgXzV+Cclzz62VQBtUcbVSpzrEAIrZkAZ1SrulqAEkFZY8iVsIDmQIQxMzbQgAAyxUPHxSCgAeIgA+SIgAc2R8PVUAYwgAd1UOTmx0bEdtDIgSgDp3CF5OfWQAD1FvX0bI3tRHKjzuZwgJQgBeIQA3AC4Qzk5fcVlxlIgAbyooVQlp6S2oCFwcAggARgPkY0dKQ8Pj2NPoKgBfRtRyYNEISYBZEhicQSyESHwonF2YzWwGAEEcXGwxmUIWCACIzhAAD4wVFUXqRRprABqqmQhQg3CQJQAEth6HN2KhUGRHDMYf08uw6gArRx1FoZYDPEDAMBi0AQAD60plsplEAAmmV9ABhTjKYLUvTBOW66UQEVisHBf6AgjA5JrSbiEhisASvW64hOdAq0Q3RxSx2yg2i1TeFrodYQACiAEdsKJjAAaUNtCh5dAvUa4TiaADkwmNcE5Ud8+CyjmA5RMjnTRs+EDy7qcPwgAG0qCH48hE4lw5HjIlnLhqrHTSd4p9EoIVmse9UUlPo02W22O1HEmdoABmfsAwcW0c-NbLldTlIzqDNhOodsRxdqrrtADy9G5rdQ67NQ6S29WECvPlv98fB6PcanuenaJAACqmCiqDciT0AsSz4IeEADo8r4gu+azgWmUEgrBizIOIB6HrOQELl26EQOmEgLOmz6bsO5HkZR1H-sRj7AYuGLYtAtEoRaxoQqMCHTqx84Xl2nEwDxQLDvxkL4GcLEALoVhQn5pt+bR3g+iZ1psUCiHM9bLrGTGcOmylQPQoi4HM6bsFcxhmVQZDHFMo5zPgGj0HoYBvGAQz4CMYx1oIszzHhyw7hAUwQAA-OcEBzM8AVBfJIVhbh8GxoUcw2mO0VxQlSV2vaIBet6+r8LgQT6AAyqgyAsuVFW+qVVBrLV7DWcEJDKnCiwlsMDJMiybLAByXK8vyuCCtAwDiI4hQ+VAxKkuSjgDS4Q0QIyzKsuyjicjyfICkKwAbcYg2Be1SEtMEKpdcY+aFsNe1jRNx3TRkYCGmAQA
 */
type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];
