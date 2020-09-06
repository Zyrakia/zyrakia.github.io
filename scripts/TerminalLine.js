var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TerminalLine = /** @class */ (function () {
    function TerminalLine(content, type, indentLevel) {
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = LineType.SOLO; }
        if (indentLevel === void 0) { indentLevel = 0; }
        this.content = content;
        this.type = type;
        this.indentLevel = indentLevel;
        this.animationSettings = __assign({}, TerminalLine.ANIMATION_SETTINGS_DEFAULTS);
        this.genElement();
    }
    TerminalLine.prototype.genElement = function () {
        var element = document.createElement('div');
        element.classList.add('line');
        if (!this.content)
            this.content = '&nbsp;';
        this.lineElement = element;
        this.applyAttributes();
    };
    TerminalLine.prototype.applyAttributes = function () {
        this.lineElement.setAttribute('data-linetype', this.type.toLowerCase());
        this.lineElement.setAttribute('data-indentlevel', "" + this.indentLevel);
    };
    TerminalLine.prototype.getContent = function () {
        return this.content;
    };
    TerminalLine.prototype.getType = function () {
        return this.type;
    };
    TerminalLine.prototype.getIndentLevel = function () {
        return this.indentLevel;
    };
    TerminalLine.prototype.getAnimationSettings = function () {
        return this.animationSettings;
    };
    TerminalLine.prototype.getElement = function () {
        return this.lineElement;
    };
    TerminalLine.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    TerminalLine.prototype.setType = function (type) {
        this.type = type;
        this.applyAttributes();
        return this;
    };
    TerminalLine.prototype.setIndentLevel = function (indentLevel) {
        this.indentLevel = indentLevel;
        this.applyAttributes();
        return this;
    };
    //Animation settings setters
    TerminalLine.prototype.setAnimationSettings = function (settings) {
        this.animationSettings = settings;
        return this;
    };
    TerminalLine.prototype.setAnimateTyping = function (animateTyping) {
        this.animationSettings.animateTyping = animateTyping;
        return this;
    };
    TerminalLine.prototype.setRandomAnimation = function (randomAnimation) {
        this.animationSettings.randomAnimation = randomAnimation;
        return this;
    };
    TerminalLine.prototype.setAnimationSpeed = function (animationSpeed) {
        this.animationSettings.animationSpeed = animationSpeed;
        return this;
    };
    TerminalLine.prototype.setDelayAfter = function (delayAfter) {
        this.animationSettings.delayAfter = delayAfter;
        return this;
    };
    TerminalLine.prototype.setBlinkAfter = function (blinkAfter) {
        this.animationSettings.blinkAfter = blinkAfter;
        return this;
    };
    TerminalLine.prototype.setRemoveBlinkAfterDelay = function (removeBlinkAfterDelay) {
        this.animationSettings.removeBlinkAfterDelay = removeBlinkAfterDelay;
        return this;
    };
    TerminalLine.prototype.setDelayBefore = function (delayBefore) {
        this.animationSettings.delayBefore = delayBefore;
        return this;
    };
    TerminalLine.prototype.setBlinkBefore = function (blinkBefore) {
        this.animationSettings.blinkBefore = blinkBefore;
        return this;
    };
    TerminalLine.ANIMATION_SETTINGS_DEFAULTS = {
        animateTyping: true,
        randomAnimation: true,
        animationSpeed: 20,
        delayAfter: 500,
        blinkAfter: false,
        removeBlinkAfterDelay: true,
        delayBefore: 0,
        blinkBefore: false,
    };
    return TerminalLine;
}());
var LineType;
(function (LineType) {
    LineType["RAW"] = "RAW";
    LineType["SOLO"] = "SOLO";
    LineType["START"] = "START";
    LineType["END"] = "END";
    LineType["INDENT"] = "INDENT";
})(LineType || (LineType = {}));
var lineTypeSymbols = new Map();
lineTypeSymbols.set(LineType.RAW, '');
lineTypeSymbols.set(LineType.SOLO, '$');
lineTypeSymbols.set(LineType.START, lineTypeSymbols.get(LineType.SOLO));
lineTypeSymbols.set(LineType.END, lineTypeSymbols.get(LineType.SOLO));
lineTypeSymbols.set(LineType.INDENT, '%');
//# sourceMappingURL=TerminalLine.js.map