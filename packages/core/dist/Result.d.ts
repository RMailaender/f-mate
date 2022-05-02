/**
 * `Err` meaning that there was some failure.
 */
export declare type Err<ErrType, OkType> = ResultOperations<ErrType, OkType> & ResultDeconstructors<ErrType, OkType> & {
    readonly _tag: "err";
    readonly err: ErrType;
};
/**
 * `Ok` meaning the computation succeeded
 */
export declare type Ok<ErrType, OkType> = ResultOperations<ErrType, OkType> & ResultDeconstructors<ErrType, OkType> & {
    readonly _tag: "ok";
    readonly value: OkType;
};
/**
 * A `Result` is the result of a computation that may fail. This is a great way to manage errors.
 *
 * A `Result` is either `Ok` meaning the computation succeeded, or it is an `Err` meaning that there was some failure.
 */
export declare type Result<ErrType, OkType> = Err<ErrType, OkType> | Ok<ErrType, OkType>;
declare type ResultOperations<ErrType, OkType> = {
    /**
     * Applies the given function `onOk` to its `value` only if the `Result` is `Ok` and returns the result of `onOk(value)` as a new `Ok`.
     * Otherwise, if the `Result` is `Err` it does nothing and returns the current `Result` unchanged.
     *
     * This is usefull if you want to modify the `value` only in the case of `Ok`.
     *
     * @example
     * import type { Result } from "@types/Result";
     *
     * declare function divide12By(num: Number): Result<string, number>;
     *
     * const resultOk = divide12By(3).map(num => num + 4);
     * // resultOk <== 'Ok 8'
     *
     * const resultErr = divide12By(0).map(num => num + 4);
     * /// resultErr <== 'Err "You can not devide by 0"'
     *
     */
    map: <OkReturn>(onOk: (value: OkType) => OkReturn) => Result<ErrType, OkReturn>;
    /**
     * Applies the given function `onOk` to its `value` only if the `Result` is `Ok`. Instead of wrapping the result of `onOk(value)` into a new `Ok`
     * like `map`, `andThen` expects `onOk` to return a `Result<ErrType, OkType>` itself. If the `Result` is `Err` it does nothing and returns the current `Result` unchanged.
     *
     * This is usefull if you want to chain multiple functions together that might fail, each depending on the result of the function which came before.
     *
     * So you can read it like: "try `thisFunctionThatMightFail` with `value` `andThen`, if it did succeed try this `otherFunctionThatMightFail` with the `result` of the first function"
     *
     * @example
     * import type { Result } from "@types/Result";
     *
     * declare function divide12By(num: Number): Result<string, number>;
     *
     * // let's suppose this function expects num to be a hole number and fails otherwise
     * declare function addHoleNumberBy4(num: Number): Result<string, number>;
     *
     * const resultOk = divide12By(3)
     *  .andThen(addHoleNumberBy4); // since 12 / 3 = 4 `addHoleNumberBy4` will succeed
     * // resultOk <== 'Ok 8'
     *
     * const resultErr = divide12By(9)
     *  .andThen(addHoleNumberBy4); // since 12 / 9 = 1.33333 `addHoleNumberBy4` fails
     * // resultErr <== 'Err "Only hole number can be added by 4, as everybody knows"'
     */
    mapErr: <ErrReturn>(onErr: (err: ErrType) => ErrReturn) => Result<ErrReturn, OkType>;
    /**
     * Applies the given function `onErr` to its `err` only if the `Result` is `Err` and returns the result of `onErr(err)` as a new `Err`.
     * Otherwise, if the `Result` is `Ok` it does nothing and returns the current `Result` unchanged.
     *
     * This is usefull if you want to modify the `err` only in the case of `Err`.
     *
     * @example
     * import type { Result } from "@types/Result";
     *
     * declare function divide12By(num: Number): Result<string, number>;
     *
     * const resultOk = divide12By(3).mapErr(error => `Seems this didn't go well: ${error}`);
     * // resultOk <== 'Ok 4'
     *
     * const resultErr = divide12By(0).mapErr(error => `Seems this didn't go well: ${error}`);
     * /// resultErr <== 'Err "Seems this didn't go well: You can not devide by 0"'
     *
     */
    andThen: <ErrReturn, OkReturn>(onOk: (value: OkType) => Result<ErrReturn, OkReturn>) => Result<ErrType, OkType> | Result<ErrReturn, OkReturn>;
    /**
     * Applies the given function `onErr` to its `err` only if the `Result` is `Err`. Instead of wrapping the result of `onErr(err)` into a new `Err`
     * like `mapErr`, `catch` expects `onErr` to return a `Result<ErrType, OkType>` itself. If the `Result` is `Ok` it does nothing and returns the current `Result` unchanged.
     *
     * This is usefull if you want to recover from a failed function call.
     *
     * So you can read it like this: Try `thisFunctionThatMightFail` with `value`, if it fails `catch` the Error with `recoverFunction`.
     *
     * @example
     * import type { Result } from "@types/Result";
     * import { ok } from "@types/Result";
     *
     * declare function divide12By(num: Number): Result<string, number>;
     *
     * const resultOk = divide12By(0)
     *   // divide12By(0) fails, so recover from the Error and set it to ok(0)
     *   .catch(() => ok(0));
     * // resultOk <== 'Ok 0'
     */
    catch: <ErrReturn, OkReturn>(onErr: (err: ErrType) => Result<ErrReturn, OkReturn>) => Result<ErrType, OkType> | Result<ErrReturn, OkReturn>;
};
declare type ResultDeconstructors<ErrType, OkType> = {
    /**
     * Returns the `value` if the `Result` is `Ok` otherwise it returns the result of `onErr(err)`.
     *
     * @example
     * import type { Result } from "@types/Result";
     *
     * declare function divide12By(num: Number): Result<string, number>;
     *
     * const resultNumber: number = divide12By(0)
     *   .withDefault(() => 0);
     * // resultNumber === 0
     *
     * const resultUnion: number | Error = divide12By(0)
     *   .withDefault((err: string) => new Error(err));
     * // resultNumber === Error("Only hole number can be added by 4, as everybody knows");
     */
    withDefault: <DefaultType>(onErr: (err: ErrType) => DefaultType) => OkType | DefaultType;
    /**
     * If the `Result` is `Err` it return `onErr(err)` if it is `Ok` it return `onOk(value)`.
     *
     * This is usefull if you want to unwrap the `Result` and want to apply a function to both of the possible cases.
     *
     * @example
     * import type { Result } from "@types/Result";
     *
     * declare function divide12By(num: Number): Result<string, number>;
     *
     * const divide12ByMessage = (num: number): string => divide12By(num)
     *   .match(
     *     err => `Can not devide 12 by ${numm} => ${err}`,
     *     value => `12 / ${num} = ${value}`
     *   );
     *
     * console.log(divide12ByMessage(4)); // --> 12 / 3 = 4
     * console.log(divide12ByMessage(0)); // --> Can not devide 12 by 0 => Only hole number can be added by 4, as everybody knows
     */
    match: <ErrReturn, OkReturn>(onErr: (err: ErrType) => ErrReturn, onOk: (value: OkType) => OkReturn) => OkReturn | ErrReturn;
};
export declare const err: <ErrType = never, OkType = never>(e: ErrType) => Result<ErrType, OkType>;
export declare const ok: <ErrType = never, OkType = never>(value: OkType) => Result<ErrType, OkType>;
export {};
