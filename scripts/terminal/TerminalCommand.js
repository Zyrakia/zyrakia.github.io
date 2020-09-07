var TerminalCommand = /** @class */ (function () {
    function TerminalCommand() {
    }
    TerminalCommand.prototype.takeInput = function (input) {
        if (!this.resolveInput)
            return;
        this.resolveInput(input);
        this.resolveInput = undefined;
    };
    TerminalCommand.prototype.openInput = function (terminal) {
        var _this = this;
        terminal.openInput(this);
        return new Promise(function (resolve) {
            _this.resolveInput = resolve;
        });
    };
    TerminalCommand.prototype.getProperties = function () {
        return this.properties;
    };
    return TerminalCommand;
}());
//# sourceMappingURL=TerminalCommand.js.map