export const compose2 = <A, B, C>(
  f: (x: A) => B,
  g: (x: B) => C
): ((x: A) => C) => {
  return (x) => g(f(x));
};

export const compose3 = <A, B, C, D>(
  f: (x: A) => B,
  g: (x: B) => C,
  h: (x: C) => D
): ((x: A) => D) => {
  return (x) => h(g(f(x)));
};

export const compose4 = <A, B, C, D, E>(
  f: (x: A) => B,
  g: (x: B) => C,
  h: (x: C) => D,
  i: (x: D) => E
): ((x: A) => E) => {
  return (x) => i(h(g(f(x))));
};
