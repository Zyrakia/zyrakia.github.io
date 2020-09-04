var Typewriter = /** @class */ (function () {
    function Typewriter(elementToPopulate, content) {
        this.currentIndex = 0;
        this.elementToPopulate = elementToPopulate;
        this.content = content;
    }
    Typewriter.prototype.go = function (settings) {
        var _this = this;
        if (!settings)
            settings = Typewriter.DEFAULT_SETTINGS;
        return new Promise(function (resolve) {
            var finishType = function () {
                setTimeout(function () {
                    _this.elementToPopulate.classList.remove('caret');
                    if (settings.blinkAfter)
                        _this.elementToPopulate.classList.add('blinkcaret');
                }, 50);
                if (!settings.delayAfter) {
                    _this.elementToPopulate.innerHTML = _this.content;
                    resolve();
                }
                else {
                    setTimeout(function () {
                        _this.elementToPopulate.innerHTML = _this.content;
                        if (settings.removeBlinkAfterDelay)
                            _this.elementToPopulate.classList.remove('blinkcaret');
                        resolve();
                    }, settings.delayAfter);
                }
            };
            var recurseType = function () {
                if (_this.currentIndex < _this.content.length) {
                    _this.elementToPopulate.innerHTML += _this.content.charAt(_this.currentIndex);
                    _this.currentIndex++;
                    var speed = void 0;
                    if (!settings.speed)
                        settings.speed = Typewriter.DEFAULT_SETTINGS.speed;
                    if (!settings.random)
                        speed = settings.speed;
                    else
                        speed = Math.round(Math.random() * settings.speed);
                    setTimeout(function () {
                        recurseType();
                    }, speed);
                }
                else {
                    finishType();
                }
            };
            _this.elementToPopulate.style.display = 'block';
            _this.elementToPopulate.classList.add('caret');
            if (settings.delayBefore) {
                if (settings.blinkBefore)
                    setTimeout(function () {
                        _this.elementToPopulate.classList.add('blinkcaret');
                    }, 50);
                setTimeout(function () {
                    setTimeout(function () {
                        _this.elementToPopulate.classList.remove('blinkcaret');
                    }, 50);
                    if (settings.instant) {
                        finishType();
                    }
                    else
                        recurseType();
                }, settings.delayBefore);
            }
            else {
                if (settings.instant) {
                    finishType();
                }
                else
                    recurseType();
            }
        });
    };
    Typewriter.DEFAULT_SETTINGS = {
        instant: false,
        speed: 10,
        random: true,
        delayAfter: 500,
        blinkAfter: false,
        removeBlinkAfterDelay: false,
        delayBefore: undefined,
        blinkBefore: false,
    };
    return Typewriter;
}());
//# sourceMappingURL=TypewriterClass.js.map