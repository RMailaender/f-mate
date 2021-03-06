import { Result } from "../../core/src/Result";

export type NotAsked = {
  _tag: "not-asked";
};

export type Loading = {
  _tag: "loading";
};

export type Failure<E> = {
  _tag: "failure";
  error: E;
};

export type Success<A> = {
  _tag: "success";
  value: A;
};

export type RemoteData<E, A> = NotAsked | Loading | Failure<E> | Success<A>;

export const fail = <E>(error: E): Failure<E> => ({ _tag: "failure", error });

export const succeed = <A>(value: A): Success<A> => ({
  _tag: "success",
  value,
});

export const fromResult = <E, A>(result: Result<E, A>): RemoteData<E, A> =>
  result._tag === "err" ? fail(result.err) : succeed(result.value);

export const isSuccess = <E, A>(rd: RemoteData<E, A>): rd is Success<A> =>
  rd._tag === "success";

export const map: <A, B>(
  fn: (a: A) => B
) => <E>(rd: RemoteData<E, A>) => RemoteData<E, B> = (fn) => (rd) =>
  isSuccess(rd) ? succeed(fn(rd.value)) : rd;
