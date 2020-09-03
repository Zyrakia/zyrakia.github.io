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
        _this.generateParentElement();
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
                        lineElement.innerText = content;
                        lineElement.setAttribute('data-lineType', type.toLowerCase());
                        lineElement.setAttribute('data-indentLevel', "" + indentLevel);
                        if (type === 'raw' && !content)
                            lineElement.innerHTML = '&nbsp;';
                        this.parentElement.appendChild(lineElement);
                        contentToTypeOut = lineElement.innerText;
                        lineElement.innerText = '';
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
                if (_this.inputElement.innerText)
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
        var _this = this;
        this.inputElement.remove();
        this.inputElement.innerText = '';
        this.addLine('solo', "Unknown command, try 'help'.").then(function () {
            _this.openInput();
        });
    };
    Terminal.prototype.registerCommand = function () { };
    Terminal.prototype.render = function (to, renderMethod) {
        if (renderMethod === void 0) { renderMethod = 'append'; }
        if (renderMethod === 'append')
            to.appendChild(this.parentElement);
        else
            to.prepend(this.parentElement);
    };
    return Terminal;
}(Renderable));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYWxDbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlcm1pbmFsQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQXVCLDRCQUFVO0lBR2hDO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0lBQzlCLENBQUM7SUFFWSwwQkFBTyxHQUFwQixVQUNDLElBQXNCLEVBQ3RCLE9BQWUsRUFDZixXQUF1QixFQUN2QixrQkFBdUM7UUFEdkMsNEJBQUEsRUFBQSxlQUF1Qjs7Ozs7O3dCQUdqQixXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2xDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDbkMsV0FBVyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7d0JBQ2hDLFdBQVcsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUM5RCxXQUFXLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLEtBQUcsV0FBYSxDQUFDLENBQUM7d0JBRS9ELElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU87NEJBQUUsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7d0JBRWpFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUV0QyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO3dCQUMvQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzt3QkFFckIsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxn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