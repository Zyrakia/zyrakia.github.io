var LineTypewriter = /** @class */ (function () {
    function LineTypewriter(line) {
        this.index = 0;
        this.line = line;
        this.content = this.line.getContent();
        this.element = this.line.getElement();
        this.settings = this.line.getAnimationSettings();
    }
    LineTypewriter.prototype.start = function () {
        var _this = this;
        this.element.classList.add('caret');
        if (this.settings.blinkBefore)
            this.element.classList.add('blinkcaret');
        return new Promise(function (resolve) {
            after(_this.settings.delayBefore, function () {
                _this.element.classList.remove('blinkcaret');
                if (_this.settings.animateTyping)
                    _this.recurseType();
                else
                    _this.stop();
            });
            _this.resolve = resolve;
        });
    };
    LineTypewriter.prototype.recurseType = function () {
        var _this = this;
        if (this.index < this.content.length) {
            var speed = this.settings.randomAnimation
                ? Math.random() * this.settings.animationSpeed
                : this.settings.animationSpeed;
            after(speed, function () {
                _this.element.innerText += _this.content.charAt(_this.index);
                _this.index++;
                _this.recurseType();
            });
        }
        else
            this.stop();
    };
    LineTypewriter.prototype.stop = function () {
        var _this = this;
        this.element.classList.remove('caret');
        if (this.settings.blinkAfter)
            this.element.classList.add('blinkcaret');
        after(this.settings.delayAfter, function () {
            _this.element.innerHTML = _this.content;
            if (_this.settings.removeBlinkAfterDelay)
                _this.element.classList.remove('blinkcaret');
            _this.resolve();
        });
    };
    return LineTypewriter;
}());
//# sourceMappingURL=Typewriter.js.map