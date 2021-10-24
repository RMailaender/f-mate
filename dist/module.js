function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $92a3b5403b27cbd2$exports = {};

$parcel$export($92a3b5403b27cbd2$exports, "err", () => $92a3b5403b27cbd2$export$8048b892d651b310);
$parcel$export($92a3b5403b27cbd2$exports, "ok", () => $92a3b5403b27cbd2$export$dcb8b3f0e2de7e49);
const $92a3b5403b27cbd2$export$8048b892d651b310 = (e)=>({
        _tag: 'err',
        err: e,
        map: ()=>$92a3b5403b27cbd2$export$8048b892d651b310(e)
        ,
        andThen: ()=>$92a3b5403b27cbd2$export$8048b892d651b310(e)
        ,
        getOrElse: (fn)=>fn()
        ,
        match: (onError)=>onError(e)
    })
;
const $92a3b5403b27cbd2$export$dcb8b3f0e2de7e49 = (value)=>({
        _tag: 'ok',
        value: value,
        map: (fn)=>$92a3b5403b27cbd2$export$dcb8b3f0e2de7e49(fn(value))
        ,
        andThen: (fn)=>fn(value)
        ,
        getOrElse: ()=>value
        ,
        match: (_, onOk)=>onOk(value)
    })
;




//# sourceMappingURL=module.js.map
