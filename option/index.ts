export enum Option {
  some,
  none,
}

export interface Some<T> {
  option: Option.some;
  value: T;
}

export interface None {
  option: Option.none;
}

export type OptionType<T> = Some<T> | None;

export const isSome = <T>(val: OptionType<T>): val is Some<T> => {
  return (val as Some<T>).option === Option.some;
};

export const isNone = (val: any): val is None => {
  return (val as None).option === Option.none;
};

export const isEven = (num: number): OptionType<number> => {
  if (num % 2 === 0) {
    return some(num);
  } else return none();
};

export const some = <T>(val: T): Some<T> => {
  return { option: Option.some, value: val };
};

export const none = (): None => {
  return { option: Option.none };
};

export const match = <S, T>(
  val: OptionType<S>,
  some: (some: S) => T,
  none: () => T
) => {
  switch (val.option) {
    case Option.some:
      return some(val.value);
    case Option.none:
      return none;
  }
};

const test = (num: number) => {
  const val = isEven(num);

  if (isSome(val)) {
    console.log("This is a even number: " + val.value);
  } else {
    console.log("This is not a even number");
  }
};

const test2 = (num: number) => {
  const tester = isEven(num);
  return match(
    tester,
    (num) => {
      return num;
    },
    () => {
      return -1;
    }
  );
};
