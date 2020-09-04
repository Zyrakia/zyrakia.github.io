var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Terminal = /** @class */ (function (_super) {
    __extends(Terminal, _super);
    function Terminal() {
        var _this = _super.call(this) || this;
        _this.commands = [];
        _this.generateParentElement();
        _this.generateInputElement();
        return _this;
    }
    Terminal.prototype.addLine = function (type, content, indentLevel, typewriterSettings) {
        if (indentLevel === void 0) { indentLevel = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var lineElement, contentToTypeOut, typewriter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineElement = document.createElement('div');
                        lineElement.classList.add('line');
                        lineElement.style.display = 'none';
                        lineElement.innerHTML = content;
                        lineElement.setAttribute('data-lineType', type.toLowerCase());
                        lineElement.setAttribute('data-indentLevel', "" + indentLevel);
                        if (type === 'raw' && !content)
                            lineElement.innerHTML = '&nbsp;';
                        this.parentElement.appendChild(lineElement);
                        contentToTypeOut = lineElement.innerHTML;
                        lineElement.innerHTML = '';
                        typewriter = new Typewriter(lineElement, contentToTypeOut);
                        return [4 /*yield*/, typewriter.go(typewriterSettings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Terminal.prototype.generateParentElement = function () {
        var generatedParentElement = document.createElement('section');
        generatedParentElement.classList.add('terminal');
        this.parentElement = generatedParentElement;
    };
    Terminal.prototype.generateInputElement = function () {
        var _this = this;
        if (this.inputElement)
            this.inputElement.remove();
        var generatedInputElement = document.createElement('span');
        generatedInputElement.classList.add('command_input');
        generatedInputElement.contentEditable = 'true';
        generatedInputElement.spellcheck = false;
        generatedInputElement.addEventListener('blur', function () {
            _this.inputElement.focus();
        });
        generatedInputElement.addEventListener('keypress', function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                if (_this.inputElement.innerHTML)
                    _this.closeInput();
            }
        });
        this.inputElement = generatedInputElement;
    };
    Terminal.prototype.openInput = function () {
        this.generateInputElement();
        this.parentElement.appendChild(this.inputElement);
        this.inputElement.focus();
    };
    Terminal.prototype.closeInput = function () {
        this.inputElement.remove();
        var command = this.inputElement.innerHTML.toLowerCase();
        if (command.includes("'")) {
            terminal.addLine(LineType.SOLO, 'Really? Lose the apostrophe...');
            this.openInput();
            return;
        }
        this.inputElement.innerHTML = '';
        var foundCommand = this.commands.find(function (cmd) { return cmd.identifier === command; });
        if (!foundCommand) {
            terminal.addLine(LineType.SOLO, "That's not right... try 'help'?");
            this.openInput();
            return;
        }
        var context = new TerminalCommandContext(this, command);
        foundCommand.invoke(context);
    };
    Terminal.prototype.registerCommand = function (command) {
        this.commands.push(command);
    };
    Terminal.prototype.render = function (to, renderMethod) {
        if (renderMethod === void 0) { renderMethod = 'append'; }
        if (renderMethod === 'append')
            to.appendChild(this.parentElement);
        else
            to.prepend(this.parentElement);
    };
    Terminal.prototype.sayDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addLine(LineType.SOLO, "Please enter a command... try 'projects' or 'help'.", 0, {})];
                    case 1:
                        _a.sent();
                        this.openInput();
                        return [2 /*return*/];
                }
            });
        });
    };
    Terminal.prototype.sayString = function (str) {
        return __awaiter(this, void 0, void 0, function () {
            var contentSplit, i, line, argsSplitContent, args, lineType, indentLevel, typewriterSettings, settings, bools, instant, speed, random, delayAfter, blinkAfter, removeBlinkAfterDelay, delayBefore, blinkBefore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentSplit = str.split('\n');
                        if (!contentSplit.length)
                            return [2 /*return*/];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < contentSplit.length)) return [3 /*break*/, 4];
                        line = contentSplit[i].trimStart();
                        argsSplitContent = line.split('||');
                        if (argsSplitContent.length !== 2)
                            return [3 /*break*/, 3];
                        args = argsSplitContent[0].split('-');
                        lineType = args[0].toUpperCase();
                        if (!LineType[lineType])
                            return [3 /*break*/, 3];
                        indentLevel = +args[1];
                        if (isNaN(indentLevel))
                            indentLevel = 0;
                        typewriterSettings = void 0;
                        try {
                            settings = args[2].toLowerCase().replace('(', '').replace(')', '').split(',');
                            bools = ['true', 'false'];
                            instant = settings[0];
                            if (!instant || !bools.includes(instant)) {
                                instant = Typewriter.DEFAULT_SETTINGS.instant;
                            }
                            else
                                instant = JSON.parse(instant);
                            speed = +settings[1];
                            if (!speed || isNaN(speed)) {
                                speed = Typewriter.DEFAULT_SETTINGS.speed;
                            }
                            random = settings[2];
                            if (!random || !bools.includes(random)) {
                                random = Typewriter.DEFAULT_SETTINGS.random;
                            }
                            else
                                random = JSON.parse(random);
                            delayAfter = +settings[3];
                            if (!delayAfter || isNaN(delayAfter)) {
                                delayAfter = Typewriter.DEFAULT_SETTINGS.delayAfter;
                            }
                            blinkAfter = settings[4];
                            if (!blinkAfter || !bools.includes(blinkAfter)) {
                                blinkAfter = Typewriter.DEFAULT_SETTINGS.blinkAfter;
                            }
                            else
                                blinkAfter = JSON.parse(blinkAfter);
                            removeBlinkAfterDelay = settings[5];
                            if (!removeBlinkAfterDelay || !bools.includes(removeBlinkAfterDelay)) {
                                removeBlinkAfterDelay = Typewriter.DEFAULT_SETTINGS.removeBlinkAfterDelay;
                            }
                            else
                                removeBlinkAfterDelay = JSON.parse(removeBlinkAfterDelay);
                            delayBefore = +settings[6];
                            if (!delayBefore || isNaN(delayBefore)) {
                                delayBefore = Typewriter.DEFAULT_SETTINGS.delayBefore;
                            }
                            blinkBefore = settings[7];
                            if (!blinkBefore || !bools.includes(blinkBefore)) {
                                blinkBefore = Typewriter.DEFAULT_SETTINGS.blinkBefore;
                            }
                            else
                                blinkBefore = JSON.parse(blinkBefore);
                            typewriterSettings = {
                                instant: instant,
                                speed: speed,
                                random: random,
                                delayAfter: delayAfter,
                                blinkAfter: blinkAfter,
                                removeBlinkAfterDelay: removeBlinkAfterDelay,
                                delayBefore: delayBefore,
                                blinkBefore: blinkBefore,
                            };
                        }
                        catch (err) {
                            typewriterSettings = Typewriter.DEFAULT_SETTINGS;
                        }
                        return [4 /*yield*/, this.addLine(LineType[lineType], argsSplitContent[1], indentLevel, typewriterSettings)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Terminal.prototype.getIdentifiers = function () {
        return this.commands.map(function (cmd) { return cmd.identifier; });
    };
    return Terminal;
}(Renderable));
//# sourceMappingURL=TerminalClass.js.map