var TraversableArray = /** @class */ (function () {
    function TraversableArray() {
        var defaults = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            defaults[_i] = arguments[_i];
        }
        this.array = [];
        this.pointer = 0;
        this.enter.apply(this, defaults);
    }
    TraversableArray.prototype.enter = function () {
        var _this = this;
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        entries.forEach(function (entry) {
            _this.array.push(entry);
        });
    };
    TraversableArray.prototype.get = function (i, end) {
        if (!end)
            return this.array.slice(1, 1)[0];
        else
            return this.array.slice(i, end);
    };
    TraversableArray.prototype.rem = function (i, end) {
        if (!end)
            return this.array.splice(1, 1)[0];
        else
            return this.array.splice(i, end);
    };
    TraversableArray.prototype.remSpecific = function (entry) {
        var i = this.array.indexOf(entry);
        if (i === -1)
            return;
        else
            return this.array.splice(i, 1)[0];
    };
    TraversableArray.prototype.current = function () {
        return this.array[this.pointer];
    };
    TraversableArray.prototype.next = function () {
        if (this.array[this.pointer + 1])
            this.pointer++;
        else
            this.toEnd();
        return this.current();
    };
    TraversableArray.prototype.prev = function () {
        if (this.array[this.pointer - 1])
            this.pointer--;
        else
            this.toStart();
        return this.current();
    };
    TraversableArray.prototype.toStart = function () {
        this.pointer = 0;
    };
    TraversableArray.prototype.toEnd = function () {
        this.pointer = this.len() - 1;
    };
    TraversableArray.prototype.to = function (i) {
        this.pointer = i;
    };
    TraversableArray.prototype.add = function (i) {
        this.pointer += i;
    };
    TraversableArray.prototype.subtract = function (i) {
        this.pointer -= i;
    };
    TraversableArray.prototype.divide = function (i) {
        this.pointer /= i;
    };
    TraversableArray.prototype.multiply = function (i) {
        this.pointer *= i;
    };
    TraversableArray.prototype.len = function () {
        return this.array.length;
    };
    TraversableArray.prototype.currPos = function () {
        return this.pointer;
    };
    TraversableArray.prototype.full = function () {
        return this.array;
    };
    return TraversableArray;
}());
//# sourceMappingURL=TraversableArray.js.map