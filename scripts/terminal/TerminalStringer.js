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
var TerminalStringer = /** @class */ (function () {
    function TerminalStringer() {
    }
    TerminalStringer.toString = function (terminal) {
        var _this = this;
        var convertedLines = [];
        terminal.getLines().forEach(function (line) {
            convertedLines.push(_this.lineToString(line));
        });
        return convertedLines.join('\n');
    };
    TerminalStringer.toReadableString = function (terminal) {
        var _this = this;
        var convertedLines = [];
        terminal.getLines().forEach(function (line) {
            convertedLines.push(_this.lineToReadableString(line));
        });
        return convertedLines.join('\n');
    };
    TerminalStringer.lineToString = function (terminalLine) {
        var animationSettings = terminalLine.getAnimationSettings();
        var build = '';
        build += terminalLine.getType() + TerminalStringer.propertySeperator;
        build += terminalLine.getIndentLevel() + TerminalStringer.propertySeperator;
        build += TerminalStringer.animationSettingsPrefix;
        Object.values(animationSettings).forEach(function (val, i) {
            build += val;
            if (i !== Object.keys(animationSettings).length - 1)
                build += TerminalStringer.propertySeperator;
        });
        build += TerminalStringer.animationSettingsSuffix;
        build += TerminalStringer.propertyContentSeperator;
        build += terminalLine.getContent();
        return build;
    };
    TerminalStringer.lineToReadableString = function (terminalLine) {
        var build = '';
        if (terminalLine.getType() === LineType.START)
            build += '\n';
        for (var i = 0; i < terminalLine.getIndentLevel(); i++) {
            build += '	';
        }
        build += lineTypeSymbols.get(terminalLine.getType()) + ' ';
        build += terminalLine.getContent();
        if (terminalLine.getType() === LineType.END)
            build += '\n';
        return build;
    };
    TerminalStringer.linesFromString = function (str) {
        var _this = this;
        var lines = str.split('\n');
        var parsedLines = [];
        lines.forEach(function (line) {
            var parsedLine = _this.lineFromString(line);
            if (parsedLine)
                parsedLines.push(parsedLine);
        });
        return parsedLines;
    };
    TerminalStringer.lineFromString = function (str) {
        //PARSE PROPERTIES
        var propertyContentSplit = str.split(TerminalStringer.propertyContentSeperator);
        if (propertyContentSplit.length !== 2)
            return;
        var line = new TerminalLine();
        var linePropsAndAnimSettings = propertyContentSplit[0].split(TerminalStringer.propertySeperator);
        line.setContent(propertyContentSplit[1]);
        var lineProps = linePropsAndAnimSettings.splice(0, 2);
        var lineType = LineType[lineProps[0].toUpperCase()];
        if (!lineType)
            return;
        line.setType(lineType);
        var indentLevel = isNaN(+lineProps[1]) ? 0 : +lineProps[1];
        line.setIndentLevel(indentLevel);
        //VALIDATE ANIMATION SETTINGS
        var animationSettingsString = linePropsAndAnimSettings.join(TerminalStringer.propertySeperator);
        if (!animationSettingsString.startsWith(TerminalStringer.animationSettingsPrefix) ||
            !animationSettingsString.endsWith(TerminalStringer.animationSettingsSuffix))
            return;
        var animationSettings = animationSettingsString
            .replace(TerminalStringer.animationSettingsPrefix, '')
            .replace(TerminalStringer.animationSettingsSuffix, '')
            .split(TerminalStringer.propertySeperator);
        var defaultsIterator = Object.keys(TerminalLine.ANIMATION_SETTINGS_DEFAULTS);
        if (animationSettings.length !== defaultsIterator.length)
            return;
        //PARSE ANIMATION SETTINGS
        var animationSettingsBuild = {};
        var animationSettingsDefaults = __assign({}, TerminalLine.ANIMATION_SETTINGS_DEFAULTS);
        defaultsIterator.forEach(function (value, i) {
            var currentSetting = animationSettings[i];
            var currentDefault = animationSettingsDefaults[value];
            var desiredType = typeof currentDefault;
            var parsedValue;
            try {
                parsedValue = JSON.parse(currentSetting);
                if (typeof parsedValue !== desiredType)
                    throw new Error();
            }
            catch (err) {
                parsedValue = currentDefault;
            }
            animationSettingsBuild[value] = parsedValue;
        });
        line.setAnimationSettings(animationSettingsBuild);
        return line;
    };
    TerminalStringer.propertySeperator = '-';
    TerminalStringer.propertyContentSeperator = '||';
    TerminalStringer.animationSettingsPrefix = '(';
    TerminalStringer.animationSettingsSuffix = ')';
    return TerminalStringer;
}());
//# sourceMappingURL=TerminalStringer.js.map