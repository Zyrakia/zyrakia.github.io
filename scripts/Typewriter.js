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
            var type = function () {
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
                        type();
                    }, speed);
                }
                else {
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
                }
            };
            _this.elementToPopulate.style.display = 'block';
            _this.elementToPopulate.classList.add('caret');
            type();
        });
    };
    Typewriter.DEFAULT_SETTINGS = {
        speed: 100,
        random: true,
        delayAfter: 500,
        blinkAfter: false,
        removeBlinkAfterDelay: false,
    };
    return Typewriter;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZXdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlR5cGV3cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7SUFjQyxvQkFBWSxpQkFBOEIsRUFBRSxPQUFlO1FBRm5ELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBR3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sdUJBQUUsR0FBVCxVQUFVLFFBQTRCO1FBQXRDLGlCQXlDQztRQXhDQSxJQUFJLENBQUMsUUFBUTtZQUFFLFFBQVEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFFdEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDMUIsSUFBTSxJQUFJLEdBQUc7Z0JBQ1osSUFBSSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUM1QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDM0UsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUVwQixJQUFJLEtBQUssU0FBUSxDQUFDO29CQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7d0JBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO29CQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07d0JBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7O3dCQUN4QyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV4RCxVQUFVLENBQUM7d0JBQ1YsSUFBSSxFQUFFLENBQUM7b0JBQ1IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNWO3FCQUFNO29CQUNOLFVBQVUsQ0FBQzt3QkFDVixLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxRQUFRLENBQUMsVUFBVTs0QkFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDN0UsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUVQLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTt3QkFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDL0I7d0JBQ0osVUFBVSxDQUFDOzRCQUNWLElBQUksUUFBUSxDQUFDLHFCQUFxQjtnQ0FDakMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBRXZELE9BQU8sRUFBRSxDQUFDO3dCQUNYLENBQUMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ3hCO2lCQUNEO1lBQ0YsQ0FBQyxDQUFDO1lBRUYsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTlDLElBQUksRUFBRSxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBM0RzQiwyQkFBZ0IsR0FBdUI7UUFDN0QsS0FBSyxFQUFFLEdBQUc7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxHQUFHO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIscUJBQXFCLEVBQUUsS0FBSztLQUM1QixDQUFDO0lBc0RILGlCQUFDO0NBQUEsQUE3REQsSUE2REMifQ==