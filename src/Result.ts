// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
export type Err<E, T> =
  InstanceOperations<E, T> &
  Deconstructos<E, T> &
  {
    readonly _tag: 'err';
    readonly err: E;
  };

export type Ok<E, T> =
  InstanceOperations<E, T> &
  Deconstructos<E, T> &
  {
    readonly _tag: 'ok';
    readonly value: T;
  };

export type Result<E, T> = Err<E, T> | Ok<E, T>;

// -------------------------------------------------------------------------------------
// interfaces
// -------------------------------------------------------------------------------------

type InstanceOperations<E, A> = {
  map: <B>(fn: (value: A) => B) => Result<E, B>;
  mapErr: <B>(fn: (err: E) => B) => Result<B, A>;
  andThen: <B, EB>(fn: (a: A) => Result<EB, B>) => Result<E | EB, B>;
}

type Deconstructos<E, A> = {
  getOrElse:  <B>(fn: (err: E) => B) => A | B;
  match: <B, C>(onErr: (err: E) => C, onOk: (value: A) => B) => B | C
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------
export const err = <E = never, T = never>(e: E): Result<E, T> => ({
  _tag: 'err',
  err: e,
  map: () => err(e),
  mapErr: fn => err(fn(e)),
  andThen: () => err(e),
  getOrElse: fn => fn(e),
  match: (onError) => onError(e)
});

export const ok = <E = never, T = never>(value: T): Result<E, T> => ({
  _tag: 'ok',
  value,
  map: fn => ok(fn(value)),
  mapErr: () => ok(value),
  andThen: fn => fn(value),
  getOrElse: () => value,
  match: (_, onOk) => onOk(value)
});
