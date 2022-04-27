function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $b49df8fa058fb4fa$exports = {};

$parcel$export($b49df8fa058fb4fa$exports, "err", () => $b49df8fa058fb4fa$export$8048b892d651b310);
$parcel$export($b49df8fa058fb4fa$exports, "ok", () => $b49df8fa058fb4fa$export$dcb8b3f0e2de7e49);
const $b49df8fa058fb4fa$export$8048b892d651b310 = (e)=>({
        _tag: "err",
        err: e,
        map: ()=>$b49df8fa058fb4fa$export$8048b892d651b310(e)
        ,
        mapErr: (onErr)=>$b49df8fa058fb4fa$export$8048b892d651b310(onErr(e))
        ,
        andThen: ()=>$b49df8fa058fb4fa$export$8048b892d651b310(e)
        ,
        withDefault: (onErr)=>onErr(e)
        ,
        match: (onErr)=>onErr(e)
        ,
        catch: (onErr)=>onErr(e)
    })
;
const $b49df8fa058fb4fa$export$dcb8b3f0e2de7e49 = (value)=>({
        _tag: "ok",
        value: value,
        map: (onOk)=>$b49df8fa058fb4fa$export$dcb8b3f0e2de7e49(onOk(value))
        ,
        mapErr: ()=>$b49df8fa058fb4fa$export$dcb8b3f0e2de7e49(value)
        ,
        andThen: (onOk)=>onOk(value)
        ,
        withDefault: ()=>value
        ,
        match: (_, onOk)=>onOk(value)
        ,
        catch: ()=>$b49df8fa058fb4fa$export$dcb8b3f0e2de7e49(value)
    })
;




//# sourceMappingURL=index.module.js.map
