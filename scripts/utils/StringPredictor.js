var StringPredictor = /** @class */ (function () {
    function StringPredictor() {
        var defaults = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            defaults[_i] = arguments[_i];
        }
        this.values = [];
        this.push.apply(this, defaults);
    }
    StringPredictor.prototype.predict = function (input, returnRandom, returnTrimmed) {
        if (returnRandom === void 0) { returnRandom = true; }
        if (returnTrimmed === void 0) { returnTrimmed = true; }
        if (!input)
            return '';
        var predictions = [];
        this.values.forEach(function (value) {
            if (value.toLowerCase().startsWith(input.toLowerCase())) {
                predictions.push(value);
            }
        });
        if (!predictions.length)
            return '';
        if (returnRandom) {
            var prediction = predictions[Math.floor(Math.random() * predictions.length)];
            if (returnTrimmed)
                return prediction.substring(input.length);
            else
                return prediction;
        }
        else
            return predictions;
    };
    StringPredictor.prototype.push = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.values).push.apply(_a, values);
    };
    StringPredictor.prototype.set = function (newValues) {
        this.values = newValues;
    };
    return StringPredictor;
}());
//# sourceMappingURL=StringPredictor.js.map