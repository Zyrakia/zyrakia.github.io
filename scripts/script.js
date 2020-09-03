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
var terminal = new Terminal();
terminal.render(document.querySelector('body'), 'prepend');
function displayDefault() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, terminal.addLine('solo', 'Established connection with remote server', undefined, {
                        delayBefore: 3000,
                        blinkBefore: true,
                        delayAfter: 1000,
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('start', 'Opening drive')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', 'Finding caches', 1, {
                            delayAfter: 1500,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', 'Found 7', 2, {
                            speed: 5,
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', 'Queued 3 (OVERFLOW)', 2, {
                            speed: 5,
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', 'Skipping 4 (EMPTY)', 2, {
                            speed: 5,
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', 'Scanning overflow caches', 1, {
                            delayAfter: 1000,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', '1.. 49 KB (SAFE)', 2, {
                            delayAfter: 3000,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', '2.. 130 KB (PARTIAL)', 2, {
                            delayAfter: 500,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', '3.. 14 KB (SAFE)', 2)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', 'Deleting overflow caches', 1, {
                            delayAfter: 1000,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', '1.. DONE', 2, {
                            delayAfter: 3000,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', '2.. DONE (REMAIN 12 KB)', 2, {
                            delayAfter: 500,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('indent', '3.. DONE', 2)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('end', 'Closing drive', undefined, {
                            delayAfter: 2000,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('solo', 'Awaiting user input...')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('raw', '', undefined, {
                            delayAfter: 3000,
                            blinkAfter: true,
                            removeBlinkAfterDelay: true,
                        })];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('solo', 'Error occured')];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, terminal.addLine('solo', 'Forcing remote connection to terminate... Goodbye World!')];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
displayDefault();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFFaEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRTNELFNBQWUsY0FBYzs7Ozt3QkFDNUIscUJBQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsMkNBQTJDLEVBQUUsU0FBUyxFQUFFO3dCQUN0RixXQUFXLEVBQUUsSUFBSTt3QkFDakIsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLFVBQVUsRUFBRSxJQUFJO3FCQUNoQixDQUFDLEVBQUE7O29CQUpGLFNBSUUsQ0FBQztvQkFFSCxxQkFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFBQTs7b0JBQWhELFNBQWdELENBQUM7b0JBRWpELHFCQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRTs0QkFDckQsVUFBVSxFQUFFLElBQUk7NEJBQ2hCLFVBQVUsRUFBRSxJQUFJOzRCQUNoQixxQkFBcUIsRUFBRSxJQUFJO3lCQUMzQixDQUFDLEVBQUE7O29CQUpGLFNBSUUsQ0FBQztvQkFDSCxxQkFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFOzRCQUM5QyxLQUFLLEVBQUUsQ0FBQzt5QkFDUixDQUFDLEVBQUE7O29CQUZGLFNBRUUsQ0FBQztvQkFDSCxxQkFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUU7NEJBQzFELEtBQUssRUFBRSxDQUFDO3lCQUNSLENBQUMsRUFBQTs7b0JBRkYs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