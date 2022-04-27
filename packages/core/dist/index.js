function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "result", () => $9971752f1c8d53e3$exports);
var $9971752f1c8d53e3$exports = {};

$parcel$export($9971752f1c8d53e3$exports, "err", () => $9971752f1c8d53e3$export$8048b892d651b310);
$parcel$export($9971752f1c8d53e3$exports, "ok", () => $9971752f1c8d53e3$export$dcb8b3f0e2de7e49);
const $9971752f1c8d53e3$export$8048b892d651b310 = (e)=>({
        _tag: "err",
        err: e,
        map: ()=>$9971752f1c8d53e3$export$8048b892d651b310(e)
        ,
        mapErr: (onErr)=>$9971752f1c8d53e3$export$8048b892d651b310(onErr(e))
        ,
        andThen: ()=>$9971752f1c8d53e3$export$8048b892d651b310(e)
        ,
        withDefault: (onErr)=>onErr(e)
        ,
        match: (onErr)=>onErr(e)
        ,
        catch: (onErr)=>onErr(e)
    })
;
const $9971752f1c8d53e3$export$dcb8b3f0e2de7e49 = (value)=>({
        _tag: "ok",
        value: value,
        map: (onOk)=>$9971752f1c8d53e3$export$dcb8b3f0e2de7e49(onOk(value))
        ,
        mapErr: ()=>$9971752f1c8d53e3$export$dcb8b3f0e2de7e49(value)
        ,
        andThen: (onOk)=>onOk(value)
        ,
        withDefault: ()=>value
        ,
        match: (_, onOk)=>onOk(value)
        ,
        catch: ()=>$9971752f1c8d53e3$export$dcb8b3f0e2de7e49(value)
    })
;




//# sourceMappingURL=index.js.map
