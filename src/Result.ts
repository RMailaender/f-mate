export type Err<E, T> = 
  InstanceOperations<E, T> & 
  Deconstructos<E, T> &
  {
    _tag: 'err';
    err: E;
  };

export type Ok<E, T> = 
  InstanceOperations<E, T> & 
  Deconstructos<E, T> &
  {
    _tag: 'ok';
    value: T;
  };

export type Result<E, T> = Err<E, T> | Ok<E, T>;


type InstanceOperations<E, A> = {
  map: <B>(fn: (value: A) => B) => Result<E, B>;
  andThen: <B>(fn: (a: A) => Result<E, B>) => Result<E, B>;
}

type Deconstructos<E, A> = {
  getOrElse: (fn: () => A) => A;
  match: <B, C>(onErr: (err: E) => C, onOk: (value: A) => B) => B | C
}



export const err = <E, T = unknown>(e: E): Result<E, T> => ({
  _tag: 'err',
  err: e,
  map: () => err(e),
  andThen: () => err(e),
  getOrElse: fn => fn(),
  match: (onError) => onError(e)
});

export const ok = <T, E = unknown>(value: T): Result<E, T> => ({
  _tag: 'ok',
  value,
  map: fn => ok(fn(value)),
  andThen: fn => fn(value),
  getOrElse: () => value,
  match: (_, onOk) => onOk(value)
});
