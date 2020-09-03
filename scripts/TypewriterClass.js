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
                _this.elementToPopulate.innerHTML = _this.content;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZXdyaXRlckNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHlwZXdyaXRlckNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBaUJDLG9CQUFZLGlCQUE4QixFQUFFLE9BQWU7UUFGbkQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBRSxHQUFULFVBQVUsUUFBNEI7UUFBdEMsaUJBa0VDO1FBakVBLElBQUksQ0FBQyxRQUFRO1lBQUUsUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUV0RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUMxQixJQUFNLFVBQVUsR0FBRztnQkFDbEIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUVoRCxVQUFVLENBQUM7b0JBQ1YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pELElBQUksUUFBUSxDQUFDLFVBQVU7d0JBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFUCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVU7b0JBQUUsT0FBTyxFQUFFLENBQUM7cUJBQy9CO29CQUNKLFVBQVUsQ0FBQzt3QkFDVixJQUFJLFFBQVEsQ0FBQyxxQkFBcUI7NEJBQ2pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUV2RCxPQUFPLEVBQUUsQ0FBQztvQkFDWCxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN4QjtZQUNGLENBQUMsQ0FBQztZQUVGLElBQU0sV0FBVyxHQUFHO2dCQUNuQixJQUFJLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQzVDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMzRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXBCLElBQUksS0FBSyxTQUFRLENBQUM7b0JBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSzt3QkFBRSxRQUFRLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7b0JBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTt3QkFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7d0JBQ3hDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXhELFVBQVUsQ0FBQzt3QkFDVixXQUFXLEVBQUUsQ0FBQztvQkFDZixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ1Y7cUJBQU07b0JBQ04sVUFBVSxFQUFFLENBQUM7aUJBQ2I7WUFDRixDQUFDLENBQUM7WUFFRixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDL0MsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUMsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUN6QixJQUFJLFFBQVEsQ0FBQyxXQUFXO29CQUN2QixVQUFVLENBQUM7d0JBQ1YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3BELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFUixVQUFVLENBQUM7b0JBQ1YsVUFBVSxDQUFDO3dCQUNWLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBRVAsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUNyQixVQUFVLEVBQUUsQ0FBQztxQkFDYjs7d0JBQU0sV0FBVyxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ04sSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNyQixVQUFVLEVBQUUsQ0FBQztpQkFDYjs7b0JBQU0sV0FBVyxFQUFFLENBQUM7YUFDckI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUF2RnNCLDJCQUFnQixHQUF1QjtRQUM3RCxPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsR0FBRztRQUNmLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLHFCQUFxQixFQUFFLEtBQUs7UUFDNUIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsV0FBVyxFQUFFLEtBQUs7S0FDbEIsQ0FBQztJQStFSCxpQkFBQztDQUFBLEFBekZELElBeUZDIn0=