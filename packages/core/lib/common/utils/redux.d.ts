export declare type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{
      type: T;
    }>
  : Readonly<{
      type: T;
      payload: P;
    }>;
export declare function createAction<T extends string>(type: T): Action<T>;
export declare function createAction<T extends string, P>(
  type: T,
  payload: P,
): Action<T, P>;
