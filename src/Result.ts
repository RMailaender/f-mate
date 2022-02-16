// -----------------------------------------------------------------------------
// model
// -----------------------------------------------------------------------------
export type Err<ErrType, OkType> = ResultOperations<ErrType, OkType> &
  ResultDeconstructors<ErrType, OkType> & {
    readonly _tag: "err";
    readonly err: ErrType;
  };

export type Ok<ErrType, OkType> = ResultOperations<ErrType, OkType> &
  ResultDeconstructors<ErrType, OkType> & {
    readonly _tag: "ok";
    readonly value: OkType;
  };

export type Result<ErrType, OkType> =
  | Err<ErrType, OkType>
  | Ok<ErrType, OkType>;

// -----------------------------------------------------------------------------
// interfaces
// -----------------------------------------------------------------------------

type ResultOperations<ErrType, OkType> = {
  map: <OkReturn>(
    onOk: (value: OkType) => OkReturn
  ) => Result<ErrType, OkReturn>;
  mapErr: <ErrReturn>(
    onErr: (err: ErrType) => ErrReturn
  ) => Result<ErrReturn, OkType>;
  andThen: <ErrReturn, OkReturn>(
    fn: (value: OkType) => Result<ErrReturn, OkReturn>
  ) => Result<ErrType | ErrReturn, OkReturn>;
};

type ResultDeconstructors<ErrType, OkType> = {
  withDefault: <DefaultType>(
    onErr: (err: ErrType) => DefaultType
  ) => OkType | DefaultType;
  match: <ErrReturn, OkReturn>(
    onErr: (err: ErrType) => ErrReturn,
    onOk: (value: OkType) => OkReturn
  ) => OkReturn | ErrReturn;
};

// -----------------------------------------------------------------------------
// constructors
// -----------------------------------------------------------------------------
export const err = <ErrType = never, OkType = never>(
  e: ErrType
): Result<ErrType, OkType> => ({
  _tag: "err",
  err: e,
  map: () => err(e),
  mapErr: (onErr) => err(onErr(e)),
  andThen: () => err(e),
  withDefault: (onErr) => onErr(e),
  match: (onError) => onError(e),
});

export const ok = <ErrType = never, OkType = never>(
  value: OkType
): Result<ErrType, OkType> => ({
  _tag: "ok",
  value,
  map: (onOk) => ok(onOk(value)),
  mapErr: () => ok(value),
  andThen: (onOk) => onOk(value),
  withDefault: () => value,
  match: (_, onOk) => onOk(value),
});
