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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZXdyaXRlckNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZXdyaXRlckNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBaUJDLG9CQUFZLGlCQUE4QixFQUFFLE9BQWU7UUFGbkQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBRSxHQUFULFVBQVUsUUFBNEI7UUFBdEMsaUJBa0VDO1FBakVBLElBQUksQ0FBQyxRQUFRO1lBQUUsUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUV0RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUMxQixJQUFNLFVBQVUsR0FBRztnQkFDbEIsVUFBVSxDQUFDO29CQUNWLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLFFBQVEsQ0FBQyxVQUFVO3dCQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM3RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDaEQsT0FBTyxFQUFFLENBQUM7aUJBQ1Y7cUJBQU07b0JBQ04sVUFBVSxDQUFDO3dCQUNWLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDaEQsSUFBSSxRQUFRLENBQUMscUJBQXFCOzRCQUNqQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZ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