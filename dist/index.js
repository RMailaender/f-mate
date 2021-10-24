function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "result", () => $1b17034ac396a0e6$exports);
var $1b17034ac396a0e6$exports = {};

$parcel$export($1b17034ac396a0e6$exports, "err", () => $1b17034ac396a0e6$export$8048b892d651b310);
$parcel$export($1b17034ac396a0e6$exports, "ok", () => $1b17034ac396a0e6$export$dcb8b3f0e2de7e49);
const $1b17034ac396a0e6$export$8048b892d651b310 = (e)=>({
        _tag: 'err',
        err: e,
        map: ()=>$1b17034ac396a0e6$export$8048b892d651b310(e)
        ,
        andThen: ()=>$1b17034ac396a0e6$export$8048b892d651b310(e)
        ,
        getOrElse: (fn)=>fn()
        ,
        match: (onError)=>onError(e)
    })
;
const $1b17034ac396a0e6$export$dcb8b3f0e2de7e49 = (value)=>({
        _tag: 'ok',
        value: value,
        map: (fn)=>$1b17034ac396a0e6$export$dcb8b3f0e2de7e49(fn(value))
        ,
        andThen: (fn)=>fn(value)
        ,
        getOrElse: ()=>value
        ,
        match: (_, onOk)=>onOk(value)
    })
;




//# sourceMappingURL=index.js.map
