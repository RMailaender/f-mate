"use strict";
// -----------------------------------------------------------------------------
// model
// -----------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.err = void 0;
// -----------------------------------------------------------------------------
// constructors
// -----------------------------------------------------------------------------
const err = (e) => ({
    _tag: "err",
    err: e,
    map: () => (0, exports.err)(e),
    mapErr: (onErr) => (0, exports.err)(onErr(e)),
    andThen: () => (0, exports.err)(e),
    withDefault: (onErr) => onErr(e),
    match: (onErr) => onErr(e),
    catch: (onErr) => onErr(e),
});
exports.err = err;
const ok = (value) => ({
    _tag: "ok",
    value,
    map: (onOk) => (0, exports.ok)(onOk(value)),
    mapErr: () => (0, exports.ok)(value),
    andThen: (onOk) => onOk(value),
    withDefault: () => value,
    match: (_, onOk) => onOk(value),
    catch: () => (0, exports.ok)(value),
});
exports.ok = ok;
