import { OptionType, isSome, some, none, Option } from "./index";

export const map = <T, V>(f: (x: T) => V, o: OptionType<T>) => {
  if (isSome(o)) {
    return some(f(o.value));
  } else {
    return none();
  }
};

export const filter = <T, V>(f: (x: T) => V, options: OptionType<T>[]) => {
  return options.map((option) => {
    const res = map(f, option);
    if (isSome(res)) {
      return res;
    }
  });
};

export const foldl = <T, V>() => {};

export const foldTest = <T>(
  f: (x: T, w: number) => number,
  i: number,
  options: T[]
): OptionType<number> => {
  if (options[i]) {
    const next = foldTest(f, i + 1, options);
    if (isSome(next)) {
      const val = f(options[i], next.value);
      return some(val);
    }
    const val = f(options[i], 0);
    return some(val);
  }
  return none();
};

export const test = () => {
  const t = [1, 2, 3];
  const v = foldTest((x: number, w: number) => x + w, 0, t);
  return v;
};
test();

export const fold = <T, V>(
  f: (x: T) => V,
  iterator: number,
  options: OptionType<T>[]
) => {
  if (options[iterator]) {
    return map(f, options[iterator]);
  }
};

console.log(test());
