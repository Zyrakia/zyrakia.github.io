var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var TerminalCommandParser = /** @class */ (function () {
    function TerminalCommandParser(strToParse, terminal) {
        this.str = strToParse;
        this.terminal = terminal;
        this.valid = this.parse();
    }
    TerminalCommandParser.prototype.parse = function () {
        var _this = this;
        if (!this.validate())
            return false;
        var split = this.str.split(' ');
        this.identifier = split.splice(0, 1)[0].trim().toLowerCase();
        this.args = __spreadArrays(split);
        var foundCommand = this.terminal
            .getCommands()
            .find(function (cmd) { return cmd.getIdentifier().toLowerCase() === _this.identifier; });
        if (!foundCommand)
            return false;
        this.command = foundCommand;
        return true;
    };
    TerminalCommandParser.prototype.validate = function () {
        if (!this.str.trim())
            return false;
        if (this.str.split(' ')[0].includes("'"))
            return false;
        return true;
    };
    TerminalCommandParser.prototype.isValid = function () {
        return this.valid;
    };
    TerminalCommandParser.prototype.hasArgs = function () {
        return !!this.args.length;
    };
    TerminalCommandParser.prototype.getCommand = function () {
        return this.command;
    };
    TerminalCommandParser.prototype.getIdentifier = function () {
        return this.identifier;
    };
    TerminalCommandParser.prototype.getArgs = function () {
        return this.args;
    };
    return TerminalCommandParser;
}());
//# sourceMappingURL=TerminalCommandParser.js.map