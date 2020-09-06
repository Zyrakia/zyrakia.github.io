function after(ms, doThis) {
    var withThese = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        withThese[_i - 2] = arguments[_i];
    }
    return new Promise(function (res) {
        var exec = function () { return (withThese ? res(doThis.apply(void 0, withThese)) : res(doThis())); };
        ms ? window.setTimeout(exec, ms) : exec();
    });
}
//# sourceMappingURL=TimeoutUtils.js.map