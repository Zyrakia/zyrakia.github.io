var Renderable = /** @class */ (function () {
    function Renderable() {
        this.parentElement = this.generateParentElement();
    }
    Renderable.prototype.render = function (to, renderMethod) {
        if (renderMethod === void 0) { renderMethod = 'append'; }
        if (renderMethod === 'append')
            to.appendChild(this.parentElement);
        else
            to.prepend(this.parentElement);
    };
    Renderable.prototype.getParentElement = function () {
        return this.parentElement;
    };
    return Renderable;
}());
//# sourceMappingURL=Renderable.js.map