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
        var _this = this;
        this.generateInputElement();
        setTimeout(function () {
            _this.parentElement.appendChild(_this.inputElement);
            _this.inputElement.focus();
        }, 50);
    };
    Terminal.prototype.closeInput = function () {
        this.inputElement.remove();
        var command = this.inputElement.innerHTML.toLowerCase();
        this.inputElement.innerHTML = '';
        var foundCommand = this.commands.find(function (cmd) { return cmd.identifier === command; });
        if (!foundCommand) {
            terminal.addLine(LineType.SOLO, "No such command, try 'help'. ");
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
    return Terminal;
}(Renderable));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYWxDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlcm1pbmFsQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQXVCLDRCQUFVO0lBS2hDO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBTk8sY0FBUSxHQUFzQixFQUFFLENBQUM7UUFJeEMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQzdCLENBQUM7SUFFWSwwQkFBTyxHQUFwQixVQUNDLElBQWMsRUFDZCxPQUFlLEVBQ2YsV0FBdUIsRUFDdkIsa0JBQXVDO1FBRHZDLDRCQUFBLEVBQUEsZUFBdUI7Ozs7Ozt3QkFHakIsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNsQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ25DLFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO3dCQUNoQyxXQUFXLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzt3QkFDOUQsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxLQUFHLFdBQWEsQ0FBQyxDQUFDO3dCQUUvRCxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPOzRCQUFFLFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO3dCQUVqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFFdEMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQzt3QkFDL0MsV0FBVyxDQUFDLFNBQVMs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Qzs0QkFFL0IsVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQ0FDckMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7NkJBQ3BEOzRCQUVHLFVBQVUsR0FBcUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMvQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQ0FDL0MsVUFBVSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7NkJBQ3BEOztnQ0FBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFFdkMscUJBQXFCLEdBQXFCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUQsSUFBSSxDQUFDLHFCQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO2dDQUNyRSxxQkFBcUIsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7NkJBQzFFOztnQ0FBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7NEJBRTdELFdBQVcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0NBQ3ZDLFdBQVcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDOzZCQUN0RDs0QkFFRyxXQUFXLEdBQXFCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDaEQsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0NBQ2pELFdBQVcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDOzZCQUN0RDs7Z0NBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBRTdDLGtCQUFrQixHQUFHO2dDQUNwQixPQUFPLEVBQUUsT0FBa0I7Z0NBQzNCLEtBQUssT0FBQTtnQ0FDTCxNQUFNLEVBQUUsTUFBaUI7Z0NBQ3pCLFVBQVUsWUFBQTtnQ0FDVixVQUFVLEVBQUUsVUFBcUI7Z0NBQ2pDLHFCQUFxQixFQUFFLHFCQUFnQztnQ0FDdkQsV0FBVyxhQUFBO2dDQUNYLFdBQVcsRUFBRSxXQUFzQjs2QkFDbkMsQ0FBQzt5QkFDRjt3QkFBQyxPQUFPLEdBQUcsRUFBRTs0QkFDYixrQkFBa0IsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7eUJBQ2pEO3dCQUVELHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQ2pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDbEIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQ25CLFdBQVcsRUFDWCxrQkFBa0IsQ0FDbEIsRUFBQTs7d0JBTEQsU0FLQyxDQUFDOzs7d0JBaEZzQyxDQUFDLEVBQUUsQ0FBQTs7Ozs7O0tBa0Y1QztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBeE1ELENBQXVCLFVBQVUsR0F3TWhDIn0=