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
                _this.elementToPopulate.innerText = _this.content;
                setTimeout(function () {
                    _this.elementToPopulate.classList.remove('caret');
                    if (settings.blinkAfter)
                        _this.elementToPopulate.classList.add('blinkcaret');
                }, 50);
                if (!settings.delayAfter)
                    resolve();
                else {
                    setTimeout(function () {
                        if (settings.removeBlinkAfterDelay)
                            _this.elementToPopulate.classList.remove('blinkcaret');
                        resolve();
                    }, settings.delayAfter);
                }
            };
            var recurseType = function () {
                if (_this.currentIndex < _this.content.length) {
                    _this.elementToPopulate.innerText += _this.content.charAt(_this.currentIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZXdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlR5cGV3cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7SUFpQkMsb0JBQVksaUJBQThCLEVBQUUsT0FBZTtRQUZuRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUd4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLHVCQUFFLEdBQVQsVUFBVSxRQUE0QjtRQUF0QyxpQkFrRUM7UUFqRUEsSUFBSSxDQUFDLFFBQVE7WUFBRSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBRXRELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQzFCLElBQU0sVUFBVSxHQUFHO2dCQUNsQixLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBRWhELFVBQVUsQ0FBQztvQkFDVixLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakQsSUFBSSxRQUFRLENBQUMsVUFBVTt3QkFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0UsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUVQLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtvQkFBRSxPQUFPLEVBQUUsQ0FBQztxQkFDL0I7b0JBQ0osVUFBVSxDQUFDO3dCQUNWLElBQUksUUFBUSxDQUFDLHFCQUFxQjs0QkFDakMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBRXZELE9BQU8sRUFBRSxDQUFDO29CQUNYLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7aUJB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