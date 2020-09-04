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
var LineType;
(function (LineType) {
    LineType["RAW"] = "raw";
    LineType["SOLO"] = "solo";
    LineType["START"] = "start";
    LineType["END"] = "end";
    LineType["INDENT"] = "indent";
})(LineType || (LineType = {}));
var Renderable = /** @class */ (function () {
    function Renderable() {
    }
    Renderable.prototype.getParentElement = function () {
        return this.parentElement;
    };
    return Renderable;
}());
var TerminalCommandContext = /** @class */ (function () {
    function TerminalCommandContext(terminal, identifier) {
        this.terminal = terminal;
        this.identifier = identifier;
    }
    TerminalCommandContext.prototype.clearTerminal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        while (terminal.getParentElement().firstChild) {
                            terminal.getParentElement().removeChild(terminal.getParentElement().firstChild);
                        }
                        return [4 /*yield*/, this.terminal.sayDefault()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TerminalCommandContext.prototype.getIdentifier = function () {
        return this.identifier;
    };
    TerminalCommandContext.prototype.getTerminal = function () {
        return this.terminal;
    };
    return TerminalCommandContext;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFLLFFBTUo7QUFORCxXQUFLLFFBQVE7SUFDWix1QkFBVyxDQUFBO0lBQ1gseUJBQWEsQ0FBQTtJQUNiLDJCQUFlLENBQUE7SUFDZix1QkFBVyxDQUFBO0lBQ1gsNkJBQWlCLENBQUE7QUFDbEIsQ0FBQyxFQU5JLFFBQVEsS0FBUixRQUFRLFFBTVo7QUFFRDtJQUFBO0lBUUEsQ0FBQztJQUhPLHFDQUFnQixHQUF2QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQU9EO0lBQ0MsZ0NBQW9CLFFBQWtCLEVBQVUsVUFBa0I7UUFBOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVE7SUFBRyxDQUFDO0lBRXpELDhDQUFhLEdBQTFCOzs7Ozt3QkFDQyxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRTs0QkFDOUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUNoRjt3QkFFRCxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQzs7Ozs7S0FDakM7SUFFTSw4Q0FBYSxHQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUNGLDZCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQyJ9