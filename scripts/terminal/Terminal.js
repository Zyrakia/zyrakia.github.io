var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
        _this.lines = [];
        _this.previousInputs = new TraversableArray();
        _this.cmdPredictor = new StringPredictor();
        _this.currentPrediction = '';
        _this.genCommandInputElement();
        return _this;
    }
    /** @override */
    Terminal.prototype.render = function (to, renderMethod) {
        if (renderMethod === void 0) { renderMethod = 'append'; }
        if (renderMethod === 'append')
            to.appendChild(this.parentElement);
        else
            to.prepend(this.parentElement);
    };
    Terminal.prototype.addLines = function () {
        var lines = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            lines[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var i, line;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < lines.length)) return [3 /*break*/, 4];
                        line = lines[i];
                        this.lines.push(line);
                        this.parentElement.appendChild(line.getElement());
                        return [4 /*yield*/, new Typewriter(line).start()];
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
    Terminal.prototype.addDefaults = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addLines(new TerminalLine("Enter a command... try 'projects' or 'help'").setDelayAfter(0))];
                    case 1:
                        _a.sent();
                        this.openInput();
                        return [2 /*return*/];
                }
            });
        });
    };
    Terminal.prototype.generateParentElement = function () {
        var element = document.createElement('section');
        element.classList.add('terminal');
        element.tabIndex = 0;
        return element;
    };
    Terminal.prototype.genCommandInputElement = function () {
        var _this = this;
        var element = document.createElement('span');
        element.classList.add('command_input');
        element.contentEditable = 'true';
        element.spellcheck = false;
        element.addEventListener('blur', function () {
            element.focus();
        });
        element.addEventListener('keydown', function (e) {
            switch (e.key) {
                case 'Tab': {
                    e.preventDefault();
                    if (_this.currentPrediction) {
                        _this.commandInputElement.innerText += _this.currentPrediction;
                        _this.currentPrediction = '';
                        _this.commandInputElement.setAttribute('data-prediction', _this.currentPrediction);
                    }
                    break;
                }
                case 'Enter': {
                    e.preventDefault();
                    if (element.innerText.trim() !== '') {
                        _this.parentElement.removeChild(_this.commandInputElement);
                        _this.dispatchCommand(_this.commandInputElement.innerText);
                        _this.commandInputElement.innerText = '';
                    }
                    break;
                }
                case 'ArrowUp': {
                    _this.commandInputElement.innerText = _this.previousInputs.prev();
                    break;
                }
                case 'ArrowDown': {
                    _this.commandInputElement.innerText = _this.previousInputs.next();
                    break;
                }
            }
            _this.currentPrediction = '';
            _this.commandInputElement.setAttribute('data-prediction', _this.currentPrediction);
        });
        element.addEventListener('keyup', function (e) {
            switch (e.key) {
                case 'Backspace': {
                    var content = _this.commandInputElement.innerText;
                    _this.currentPrediction = _this.cmdPredictor.predict(content);
                    _this.commandInputElement.setAttribute('data-prediction', _this.currentPrediction);
                    break;
                }
            }
        });
        element.addEventListener('keypress', function (e) {
            _this.currentPrediction = _this.cmdPredictor.predict(_this.commandInputElement.innerText + e.key);
            _this.commandInputElement.setAttribute('data-prediction', _this.currentPrediction);
        });
        this.commandInputElement = element;
    };
    Terminal.prototype.openInput = function (context) {
        if (context === void 0) { context = 'global'; }
        this.parentElement.appendChild(this.commandInputElement);
        this.parentElement.focus();
        this.commandInputElement.focus();
        this.commandInputElement.scrollIntoView();
        this.inputContext = context;
    };
    Terminal.prototype.dispatchCommand = function (content) {
        if (this.inputContext !== 'global') {
            this.inputContext.takeInput(content);
            return;
        }
        this.currentPrediction = '';
        this.previousInputs.enter(content);
        this.previousInputs.to(this.previousInputs.len() - 1);
        var parser = new TerminalCommandParser(content, this);
        if (!parser.isValid()) {
            terminal
                .addLines(new TerminalLine("That's not right... try 'help'?").setDelayAfter(0))
                .then(function () {
                terminal.openInput();
            });
            return;
        }
        parser.getCommand().invoke(this, parser.getArgs());
    };
    Terminal.prototype.clear = function () {
        this.lines = [];
        this.parentElement.innerHTML = '';
    };
    Terminal.prototype.registerCommands = function () {
        var _this = this;
        var commands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            commands[_i] = arguments[_i];
        }
        commands.forEach(function (cmd) {
            _this.commands.push(cmd);
            _this.cmdPredictor.set(_this.getCommandIdentifiers());
        });
    };
    Terminal.prototype.getCommandInputElement = function () {
        return this.commandInputElement;
    };
    Terminal.prototype.getCommands = function () {
        return this.commands;
    };
    Terminal.prototype.getCommandIdentifiers = function () {
        return this.commands.map(function (cmd) { return cmd.getProperties().identifier; });
    };
    Terminal.prototype.getLines = function () {
        return this.lines;
    };
    return Terminal;
}(Renderable));
//# sourceMappingURL=Terminal.js.map