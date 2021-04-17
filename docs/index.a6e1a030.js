// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"69fNU":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "bf678d11a98318fa9af395f5a6e1a030";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3rfh7":[function(require,module,exports) {
require('../styles/terminal.css');
var _commands = require('./commands');
var _terminalTerminal = require('./terminal/Terminal');
var _terminalTerminalStringer = require('./terminal/TerminalStringer');
const terminal = new _terminalTerminal.Terminal();
terminal.render(document.querySelector('body'), 'prepend');
terminal.registerCommands(new _commands.HelpCommand(), new _commands.ProjectsCommand(), new _commands.AboutCommand(), new _commands.ContactCommand(), new _commands.CLSCommand(), new _commands.ResetCommand(), new _commands.EchoCommand(), new _commands.ExportCommand(), new _commands.TechnicalExport(), new _commands.GotoCommand(), new _commands.PICommand());
window.addEventListener('load', async () => {
  const lines = localStorage.getItem('previousLines');
  if (lines) {
    const parsedLines = _terminalTerminalStringer.TerminalStringer.linesFromString(lines);
    parsedLines.forEach(line => {
      line.setAnimateTyping(false).setDelayAfter(0).setDelayBefore(0);
    });
    await terminal.addLines(...parsedLines);
    localStorage.removeItem('previousLines');
    terminal.openInput();
  } else terminal.addDefaults();
});
window.addEventListener('beforeunload', () => {
  if (terminal.getLines().length > 1) {
    const linesToSave = _terminalTerminalStringer.TerminalStringer.toString(terminal);
    localStorage.setItem('previousLines', linesToSave);
  }
});

},{"../styles/terminal.css":"6v0ID","./commands":"2zr48","./terminal/Terminal":"5s2CL","./terminal/TerminalStringer":"1biNr"}],"6v0ID":[function() {},{}],"2zr48":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _About = require('./About');
_parcelHelpers.exportAll(_About, exports);
var _CLS = require('./CLS');
_parcelHelpers.exportAll(_CLS, exports);
var _Contact = require('./Contact');
_parcelHelpers.exportAll(_Contact, exports);
var _Echo = require('./Echo');
_parcelHelpers.exportAll(_Echo, exports);
var _Export = require('./Export');
_parcelHelpers.exportAll(_Export, exports);
var _Goto = require('./Goto');
_parcelHelpers.exportAll(_Goto, exports);
var _Help = require('./Help');
_parcelHelpers.exportAll(_Help, exports);
var _PI = require('./PI');
_parcelHelpers.exportAll(_PI, exports);
var _Projects = require('./Projects');
_parcelHelpers.exportAll(_Projects, exports);
var _Reset = require('./Reset');
_parcelHelpers.exportAll(_Reset, exports);
_parcelHelpers.exportAll(_About, exports);
var _Suggest = require('./Suggest');
_parcelHelpers.exportAll(_Suggest, exports);
var _TechnicalExport = require('./TechnicalExport');
_parcelHelpers.exportAll(_TechnicalExport, exports);

},{"./About":"T0E7U","./CLS":"51D2Z","./Contact":"5i9vk","./Echo":"1J6X5","./Export":"3upX3","./Goto":"27RkL","./Help":"3I3BB","./PI":"QP3jW","./Projects":"5TU8L","./Reset":"3iX1U","./Suggest":"2fXMS","./TechnicalExport":"2ePXH","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"T0E7U":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "AboutCommand", function () {
  return AboutCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class AboutCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'about'
  };
  async invoke(terminal) {
    const response = [];
    response.push(new _terminalTerminalLine.TerminalLine('About me:', _terminalTerminalLine.LineType.START));
    response.push(new _terminalTerminalLine.TerminalLine('', _terminalTerminalLine.LineType.RAW));
    response.push(new _terminalTerminalLine.TerminalLine('', _terminalTerminalLine.LineType.RAW));
    response.push(new _terminalTerminalLine.TerminalLine('I like web development.', _terminalTerminalLine.LineType.INDENT, 1));
    response.push(new _terminalTerminalLine.TerminalLine('', _terminalTerminalLine.LineType.RAW));
    response.push(new _terminalTerminalLine.TerminalLine('', _terminalTerminalLine.LineType.RAW));
    response.push(new _terminalTerminalLine.TerminalLine("Who cares, try 'projects'.", _terminalTerminalLine.LineType.END));
    await terminal.addLines(...response);
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"178Jn":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TerminalCommand", function () {
  return TerminalCommand;
});
class TerminalCommand {
  takeInput(input) {
    if (!this.resolveInput) return;
    this.resolveInput(input);
    this.resolveInput = undefined;
  }
  openInput(terminal) {
    terminal.openInput(this);
    return new Promise(resolve => {
      this.resolveInput = resolve;
    });
  }
  getProperties() {
    return this.properties;
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"1hwEC":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TerminalLine", function () {
  return TerminalLine;
});
_parcelHelpers.export(exports, "LineType", function () {
  return LineType;
});
_parcelHelpers.export(exports, "lineTypeSymbols", function () {
  return lineTypeSymbols;
});
class TerminalLine {
  static ANIMATION_SETTINGS_DEFAULTS = {
    animateTyping: true,
    randomAnimation: true,
    animationSpeed: 20,
    delayAfter: 250,
    blinkAfter: false,
    removeBlinkAfterDelay: true,
    delayBefore: 0,
    blinkBefore: false
  };
  constructor(content = '', type = LineType.SOLO, indentLevel = 0) {
    this.content = content;
    this.type = type;
    this.indentLevel = indentLevel;
    this.animationSettings = {
      ...TerminalLine.ANIMATION_SETTINGS_DEFAULTS
    };
    this.genElement();
  }
  genElement() {
    const element = document.createElement('div');
    element.classList.add('line');
    if (!this.content) this.content = '&nbsp;';
    this.lineElement = element;
    this.applyAttributes();
  }
  applyAttributes() {
    this.lineElement.setAttribute('data-linetype', this.type.toLowerCase());
    this.lineElement.setAttribute('data-indentlevel', `${this.indentLevel}`);
  }
  getContent() {
    return this.content;
  }
  getType() {
    return this.type;
  }
  getIndentLevel() {
    return this.indentLevel;
  }
  getAnimationSettings() {
    return this.animationSettings;
  }
  getElement() {
    return this.lineElement;
  }
  setContent(content) {
    this.content = content;
    return this;
  }
  setType(type) {
    this.type = type;
    this.applyAttributes();
    return this;
  }
  setIndentLevel(indentLevel) {
    this.indentLevel = indentLevel;
    this.applyAttributes();
    return this;
  }
  /*Animation settings setters*/
  setAnimationSettings(settings) {
    this.animationSettings = settings;
    return this;
  }
  setAnimateTyping(animateTyping) {
    this.animationSettings.animateTyping = animateTyping;
    return this;
  }
  setRandomAnimation(randomAnimation) {
    this.animationSettings.randomAnimation = randomAnimation;
    return this;
  }
  setAnimationSpeed(animationSpeed) {
    this.animationSettings.animationSpeed = animationSpeed;
    return this;
  }
  setDelayAfter(delayAfter) {
    this.animationSettings.delayAfter = delayAfter;
    return this;
  }
  setBlinkAfter(blinkAfter) {
    this.animationSettings.blinkAfter = blinkAfter;
    return this;
  }
  setRemoveBlinkAfterDelay(removeBlinkAfterDelay) {
    this.animationSettings.removeBlinkAfterDelay = removeBlinkAfterDelay;
    return this;
  }
  setDelayBefore(delayBefore) {
    this.animationSettings.delayBefore = delayBefore;
    return this;
  }
  setBlinkBefore(blinkBefore) {
    this.animationSettings.blinkBefore = blinkBefore;
    return this;
  }
}
let LineType;
(function (LineType) {
  LineType["RAW"] = "RAW";
  LineType["SOLO"] = "SOLO";
  LineType["START"] = "START";
  LineType["END"] = "END";
  LineType["INDENT"] = "INDENT";
})(LineType || (LineType = {}));
const lineTypeSymbols = new Map();
lineTypeSymbols.set(LineType.RAW, '');
lineTypeSymbols.set(LineType.SOLO, '$');
lineTypeSymbols.set(LineType.START, lineTypeSymbols.get(LineType.SOLO));
lineTypeSymbols.set(LineType.END, lineTypeSymbols.get(LineType.SOLO));
lineTypeSymbols.set(LineType.INDENT, '%');

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"51D2Z":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "CLSCommand", function () {
  return CLSCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
class CLSCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'cls'
  };
  async invoke(terminal) {
    terminal.clear();
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5i9vk":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ContactCommand", function () {
  return ContactCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class ContactCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'contact'
  };
  async invoke(terminal) {
    const response = [];
    response.push(new _terminalTerminalLine.TerminalLine('My socials:', _terminalTerminalLine.LineType.START));
    response.push(new _terminalTerminalLine.TerminalLine('<a target="_blank" href="https://www.twitter.com/zyrakia">Twitter: @Zyrakia</a>', _terminalTerminalLine.LineType.INDENT, 1));
    response.push(new _terminalTerminalLine.TerminalLine('Email: mailzyrakia@gmail.com', _terminalTerminalLine.LineType.INDENT, 1));
    response.push(new _terminalTerminalLine.TerminalLine('But why contact me?!', _terminalTerminalLine.LineType.END));
    await terminal.addLines(...response);
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1J6X5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "EchoCommand", function () {
  return EchoCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class EchoCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'echo',
    usage: '[...contents]'
  };
  async invoke(terminal, args) {
    const echoContent = args.join(' ');
    if (!echoContent) {
      await terminal.addLines(new _terminalTerminalLine.TerminalLine('Well at least give me something to echo...'));
      terminal.openInput();
      return;
    }
    await terminal.addLines(new _terminalTerminalLine.TerminalLine(`${echoContent}`, _terminalTerminalLine.LineType.RAW));
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3upX3":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ExportCommand", function () {
  return ExportCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
var _terminalTerminalStringer = require('../terminal/TerminalStringer');
class ExportCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'export'
  };
  async invoke(terminal) {
    const saveContent = _terminalTerminalStringer.TerminalStringer.toReadableString(terminal);
    navigator.clipboard.writeText(saveContent);
    await terminal.addLines(new _terminalTerminalLine.TerminalLine('Saved terminal contents to clipboard.'));
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","../terminal/TerminalStringer":"1biNr","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1biNr":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TerminalStringer", function () {
  return TerminalStringer;
});
var _TerminalLine = require('./TerminalLine');
class TerminalStringer {
  static propertySeperator = '-';
  static propertyContentSeperator = '||';
  static animationSettingsPrefix = '(';
  static animationSettingsSuffix = ')';
  static toString(terminal) {
    const convertedLines = [];
    terminal.getLines().forEach(line => {
      convertedLines.push(this.lineToString(line));
    });
    return convertedLines.join('\n');
  }
  static toReadableString(terminal) {
    const convertedLines = [];
    terminal.getLines().forEach(line => {
      convertedLines.push(this.lineToReadableString(line));
    });
    return convertedLines.join('\n');
  }
  static lineToString(terminalLine) {
    const animationSettings = terminalLine.getAnimationSettings();
    let build = '';
    build += terminalLine.getType() + TerminalStringer.propertySeperator;
    build += terminalLine.getIndentLevel() + TerminalStringer.propertySeperator;
    build += TerminalStringer.animationSettingsPrefix;
    Object.values(animationSettings).forEach((val, i) => {
      build += val;
      if (i !== Object.keys(animationSettings).length - 1) build += TerminalStringer.propertySeperator;
    });
    build += TerminalStringer.animationSettingsSuffix;
    build += TerminalStringer.propertyContentSeperator;
    build += terminalLine.getContent();
    return build;
  }
  static lineToReadableString(terminalLine) {
    let build = '';
    if (terminalLine.getType() === _TerminalLine.LineType.START) build += '\n';
    for (let i = 0; i < terminalLine.getIndentLevel(); i++) {
      build += '	';
    }
    build += _TerminalLine.lineTypeSymbols.get(terminalLine.getType()) + ' ';
    build += terminalLine.getContent();
    if (terminalLine.getType() === _TerminalLine.LineType.END) build += '\n';
    return build;
  }
  static linesFromString(str) {
    const lines = str.split('\n');
    const parsedLines = [];
    lines.forEach(line => {
      const parsedLine = this.lineFromString(line);
      if (parsedLine) parsedLines.push(parsedLine);
    });
    return parsedLines;
  }
  static lineFromString(str) {
    // PARSE PROPERTIES
    const propertyContentSplit = str.split(TerminalStringer.propertyContentSeperator);
    if (propertyContentSplit.length !== 2) return;
    const line = new _TerminalLine.TerminalLine();
    const linePropsAndAnimSettings = propertyContentSplit[0].split(TerminalStringer.propertySeperator);
    line.setContent(propertyContentSplit[1]);
    const lineProps = linePropsAndAnimSettings.splice(0, 2);
    const lineType = _TerminalLine.LineType[lineProps[0].toUpperCase()];
    if (!lineType) return;
    line.setType(lineType);
    const indentLevel = isNaN(+lineProps[1]) ? 0 : +lineProps[1];
    line.setIndentLevel(indentLevel);
    // VALIDATE ANIMATION SETTINGS
    const animationSettingsString = linePropsAndAnimSettings.join(TerminalStringer.propertySeperator);
    if (!animationSettingsString.startsWith(TerminalStringer.animationSettingsPrefix) || !animationSettingsString.endsWith(TerminalStringer.animationSettingsSuffix)) return;
    const animationSettings = animationSettingsString.replace(TerminalStringer.animationSettingsPrefix, '').replace(TerminalStringer.animationSettingsSuffix, '').split(TerminalStringer.propertySeperator);
    const defaultsIterator = Object.keys(_TerminalLine.TerminalLine.ANIMATION_SETTINGS_DEFAULTS);
    if (animationSettings.length !== defaultsIterator.length) return;
    // PARSE ANIMATION SETTINGS
    const animationSettingsBuild = {
    };
    const animationSettingsDefaults = {
      ..._TerminalLine.TerminalLine.ANIMATION_SETTINGS_DEFAULTS
    };
    defaultsIterator.forEach((value, i) => {
      const currentSetting = animationSettings[i];
      const currentDefault = animationSettingsDefaults[value];
      const desiredType = typeof currentDefault;
      let parsedValue;
      try {
        parsedValue = JSON.parse(currentSetting);
        if (typeof parsedValue !== desiredType) throw new Error();
      } catch (err) {
        parsedValue = currentDefault;
      }
      animationSettingsBuild[value] = parsedValue;
    });
    line.setAnimationSettings(animationSettingsBuild);
    return line;
  }
}

},{"./TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"27RkL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "GotoCommand", function () {
  return GotoCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class GotoCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'goto',
    usage: '(url)'
  };
  async invoke(terminal, args) {
    let location = args[0];
    if (!location) {
      await terminal.addLines(new _terminalTerminalLine.TerminalLine('Where would you like to go?'));
      location = await this.openInput(terminal);
    }
    if (!location.includes('https://') || !location.includes('http://')) location = 'https://' + location;
    try {
      window.location.replace(location);
    } catch (error) {
      await terminal.addLines(new _terminalTerminalLine.TerminalLine('How do you expect me to send you there!?'));
      terminal.openInput();
    }
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3I3BB":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "HelpCommand", function () {
  return HelpCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class HelpCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'help',
    usage: '(page)'
  };
  PER_PAGE = 5;
  async invoke(terminal, args) {
    const response = [];
    const commands = [...terminal.getCommands()].filter(cmd => !cmd.getProperties().hidden);
    const pages = Math.ceil(commands.length / this.PER_PAGE);
    let pageNum;
    let page;
    if (args[0] && !isNaN(+args[0])) {
      pageNum = +args[0];
    } else pageNum = 1;
    pageNum = this.contain(pageNum, pages, 1);
    page = commands.splice((pageNum - 1) * this.PER_PAGE, this.PER_PAGE);
    response.push(new _terminalTerminalLine.TerminalLine(`Available commands: (${pageNum}/${pages})`, _terminalTerminalLine.LineType.START).setAnimationSpeed(5).setDelayAfter(0));
    page.forEach(cmd => {
      const {identifier, usage, hidden} = cmd.getProperties();
      if (!hidden) {
        response.push(new _terminalTerminalLine.TerminalLine(`'${identifier}${usage ? ` ${usage}` : ''}'`, _terminalTerminalLine.LineType.INDENT, 1).setAnimationSpeed(5).setDelayAfter(0));
      }
    });
    await terminal.addLines(...response);
    terminal.openInput();
  }
  contain(n, max, min) {
    n = Math.round(n);
    if (n > max) n = max;
    if (n < min) n = min;
    return n;
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"QP3jW":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "PICommand", function () {
  return PICommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class PICommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: '3.14',
    hidden: true
  };
  PI1000 = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989';
  async invoke(terminal) {
    await terminal.addLines(new _terminalTerminalLine.TerminalLine(this.PI1000).setAnimationSpeed(1));
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5TU8L":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ProjectsCommand", function () {
  return ProjectsCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class ProjectsCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'projects'
  };
  async invoke(terminal) {
    const response = [];
    response.push(new _terminalTerminalLine.TerminalLine('My projects:', _terminalTerminalLine.LineType.START));
    response.push(new _terminalTerminalLine.TerminalLine('This website', _terminalTerminalLine.LineType.INDENT, 1));
    response.push(new _terminalTerminalLine.TerminalLine('<a target="_blank" href="https://www.npmjs.com/package/tmijs-commander">TMIJS Commander</a>', _terminalTerminalLine.LineType.INDENT, 1));
    response.push(new _terminalTerminalLine.TerminalLine('<a target="_blank" href="https://zyrakia.github.io/HyperStatus/">HyperStatus (Abandoned, might redo someday)</a>', _terminalTerminalLine.LineType.INDENT, 1));
    response.push(new _terminalTerminalLine.TerminalLine('Everything else is boring...', _terminalTerminalLine.LineType.END));
    await terminal.addLines(...response);
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3iX1U":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ResetCommand", function () {
  return ResetCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
class ResetCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'reset',
    hidden: true
  };
  async invoke(terminal) {
    terminal.clear();
    terminal.addDefaults();
  }
}

},{"../terminal/TerminalCommand":"178Jn","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2fXMS":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "SuggestCommand", function () {
  return SuggestCommand;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
class SuggestCommand extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'suggest'
  };
  async invoke(terminal) {
    const def = new _terminalTerminalLine.TerminalLine("Enter your suggestion, or 'cancel':");
    await terminal.addLines(def);
    const response = await this.openInput(terminal);
    if (response.trim().toLowerCase() === 'cancel') {
      await terminal.addLines(new _terminalTerminalLine.TerminalLine('Action cancelled...'));
      terminal.openInput();
      return;
    }
    await terminal.addLines(new _terminalTerminalLine.TerminalLine('I have yet to connect my API :('));
    console.log(response);
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2ePXH":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TechnicalExport", function () {
  return TechnicalExport;
});
var _terminalTerminalCommand = require('../terminal/TerminalCommand');
var _terminalTerminalLine = require('../terminal/TerminalLine');
var _terminalTerminalStringer = require('../terminal/TerminalStringer');
class TechnicalExport extends _terminalTerminalCommand.TerminalCommand {
  properties = {
    identifier: 'techexport',
    hidden: true
  };
  async invoke(terminal) {
    const saveContent = _terminalTerminalStringer.TerminalStringer.toString(terminal);
    navigator.clipboard.writeText(saveContent);
    await terminal.addLines(new _terminalTerminalLine.TerminalLine('Saved technical terminal contents to clipboard.'));
    terminal.openInput();
  }
}

},{"../terminal/TerminalCommand":"178Jn","../terminal/TerminalLine":"1hwEC","../terminal/TerminalStringer":"1biNr","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5s2CL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Terminal", function () {
  return Terminal;
});
var _utilsRenderable = require('../utils/Renderable');
var _utilsStringPredictor = require('../utils/StringPredictor');
var _utilsTraversableArray = require('../utils/TraversableArray');
var _utilsTypewriter = require('../utils/Typewriter');
var _TerminalCommandParser = require('./TerminalCommandParser');
var _TerminalLine = require('./TerminalLine');
class Terminal extends _utilsRenderable.Renderable {
  commands = [];
  lines = [];
  previousInputs = new _utilsTraversableArray.TraversableArray();
  cmdPredictor = new _utilsStringPredictor.StringPredictor();
  currentPrediction = '';
  constructor() {
    super();
    this.genCommandInputElement();
  }
  /** @override*/
  render(to, renderMethod = 'append') {
    if (renderMethod === 'append') to.appendChild(this.parentElement); else to.prepend(this.parentElement);
  }
  async addLines(...lines) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      this.lines.push(line);
      this.parentElement.appendChild(line.getElement());
      await new _utilsTypewriter.Typewriter(line).start();
    }
  }
  async addDefaults() {
    await this.addLines(new _TerminalLine.TerminalLine("Enter a command... try 'projects' or 'help'").setDelayAfter(0));
    this.openInput();
  }
  generateParentElement() {
    const element = document.createElement('section');
    element.classList.add('terminal');
    element.tabIndex = 0;
    return element;
  }
  genCommandInputElement() {
    const element = document.createElement('span');
    element.classList.add('command_input');
    element.contentEditable = 'true';
    element.spellcheck = false;
    element.addEventListener('blur', () => {
      element.focus();
    });
    element.addEventListener('keydown', e => {
      switch (e.key) {
        case 'Tab':
          {
            e.preventDefault();
            if (this.currentPrediction) {
              this.commandInputElement.innerText += this.currentPrediction;
              this.currentPrediction = '';
              this.commandInputElement.setAttribute('data-prediction', this.currentPrediction);
            }
            break;
          }
        case 'Enter':
          {
            e.preventDefault();
            if (element.innerText.trim() !== '') {
              this.parentElement.removeChild(this.commandInputElement);
              this.dispatchCommand(this.commandInputElement.innerText);
              this.commandInputElement.innerText = '';
            }
            break;
          }
        case 'ArrowUp':
          {
            this.commandInputElement.innerText = this.previousInputs.prev();
            break;
          }
        case 'ArrowDown':
          {
            this.commandInputElement.innerText = this.previousInputs.next();
            break;
          }
      }
      this.currentPrediction = '';
      this.commandInputElement.setAttribute('data-prediction', this.currentPrediction);
    });
    element.addEventListener('keyup', e => {
      switch (e.key) {
        case 'Backspace':
          {
            const content = this.commandInputElement.innerText;
            this.currentPrediction = this.cmdPredictor.predict(content);
            this.commandInputElement.setAttribute('data-prediction', this.currentPrediction);
            break;
          }
      }
    });
    element.addEventListener('keypress', e => {
      this.currentPrediction = this.cmdPredictor.predict(this.commandInputElement.innerText + e.key);
      this.commandInputElement.setAttribute('data-prediction', this.currentPrediction);
    });
    this.commandInputElement = element;
  }
  openInput(context = 'global') {
    this.parentElement.appendChild(this.commandInputElement);
    this.parentElement.focus();
    this.commandInputElement.focus();
    this.commandInputElement.scrollIntoView();
    this.inputContext = context;
  }
  dispatchCommand(content) {
    if (this.inputContext !== 'global') {
      this.inputContext.takeInput(content);
      return;
    }
    this.currentPrediction = '';
    this.previousInputs.enter(content);
    this.previousInputs.to(this.previousInputs.len() - 1);
    const parser = new _TerminalCommandParser.TerminalCommandParser(content, this);
    if (!parser.isValid()) {
      this.addLines(new _TerminalLine.TerminalLine("That's not right... try 'help'?").setDelayAfter(0)).then(() => {
        this.openInput();
      });
      return;
    }
    parser.getCommand().invoke(this, parser.getArgs());
  }
  clear() {
    this.lines = [];
    this.parentElement.innerHTML = '';
  }
  registerCommands(...commands) {
    commands.forEach(cmd => {
      this.commands.push(cmd);
      this.cmdPredictor.set(this.getCommandIdentifiers());
    });
  }
  getCommandInputElement() {
    return this.commandInputElement;
  }
  getCommands() {
    return this.commands;
  }
  getCommandIdentifiers() {
    return this.commands.map(cmd => cmd.getProperties().identifier);
  }
  getLines() {
    return this.lines;
  }
}

},{"../utils/Renderable":"ojoSi","../utils/StringPredictor":"59bhh","../utils/TraversableArray":"Zv3EY","../utils/Typewriter":"6VZ0S","./TerminalCommandParser":"1QeEp","./TerminalLine":"1hwEC","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"ojoSi":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Renderable", function () {
  return Renderable;
});
class Renderable {
  constructor() {
    this.parentElement = this.generateParentElement();
  }
  render(to, renderMethod = 'append') {
    if (renderMethod === 'append') to.appendChild(this.parentElement); else to.prepend(this.parentElement);
  }
  getParentElement() {
    return this.parentElement;
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"59bhh":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "StringPredictor", function () {
  return StringPredictor;
});
class StringPredictor {
  values = [];
  constructor(...defaults) {
    this.push(...defaults);
  }
  predict(input, returnRandom = true, returnTrimmed = true) {
    if (!input) return '';
    const predictions = [];
    this.values.forEach(value => {
      if (value.toLowerCase().startsWith(input.toLowerCase())) {
        predictions.push(value);
      }
    });
    if (!predictions.length) return '';
    if (returnRandom) {
      const prediction = predictions[Math.floor(Math.random() * predictions.length)];
      if (returnTrimmed) return prediction.substring(input.length); else return prediction;
    } else return predictions;
  }
  push(...values) {
    this.values.push(...values);
  }
  set(newValues) {
    this.values = newValues;
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"Zv3EY":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TraversableArray", function () {
  return TraversableArray;
});
class TraversableArray {
  array = [];
  pointer = 0;
  constructor(...defaults) {
    this.enter(...defaults);
  }
  enter(...entries) {
    entries.forEach(entry => {
      this.array.push(entry);
    });
  }
  get(i, end) {
    if (!end) return this.array.slice(1, 1)[0]; else return this.array.slice(i, end);
  }
  rem(i, end) {
    if (!end) return this.array.splice(1, 1)[0]; else return this.array.splice(i, end);
  }
  remSpecific(entry) {
    const i = this.array.indexOf(entry);
    if (i === -1) return; else return this.array.splice(i, 1)[0];
  }
  current() {
    return this.array[this.pointer];
  }
  next() {
    if (this.array[this.pointer + 1]) this.pointer++; else this.toEnd();
    return this.current();
  }
  prev() {
    if (this.array[this.pointer - 1]) this.pointer--; else this.toStart();
    return this.current();
  }
  toStart() {
    this.pointer = 0;
  }
  toEnd() {
    this.pointer = this.len() - 1;
  }
  to(i) {
    this.pointer = i;
  }
  add(i) {
    this.pointer += i;
  }
  subtract(i) {
    this.pointer -= i;
  }
  divide(i) {
    this.pointer /= i;
  }
  multiply(i) {
    this.pointer *= i;
  }
  len() {
    return this.array.length;
  }
  currPos() {
    return this.pointer;
  }
  full() {
    return this.array;
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6VZ0S":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Typewriter", function () {
  return Typewriter;
});
var _TimeoutUtils = require('./TimeoutUtils');
class Typewriter {
  index = 0;
  constructor(line) {
    this.line = line;
    this.content = this.line.getContent();
    this.element = this.line.getElement();
    this.settings = this.line.getAnimationSettings();
  }
  start() {
    this.element.classList.add('caret');
    if (this.settings.blinkBefore) this.element.classList.add('blinkcaret');
    return new Promise(resolve => {
      this.resolve = resolve;
      _TimeoutUtils.after(this.settings.delayBefore, () => {
        this.element.classList.remove('blinkcaret');
        if (this.settings.animateTyping) this.recurseType(); else this.stop();
      });
    });
  }
  recurseType() {
    if (this.index < this.content.length) {
      const speed = this.settings.randomAnimation ? Math.random() * this.settings.animationSpeed : this.settings.animationSpeed;
      _TimeoutUtils.after(speed, () => {
        this.element.innerText += this.content.charAt(this.index);
        this.element.scrollIntoView();
        this.index++;
        this.recurseType();
      });
    } else this.stop();
  }
  stop() {
    this.element.classList.remove('caret');
    if (this.settings.blinkAfter) this.element.classList.add('blinkcaret');
    _TimeoutUtils.after(this.settings.delayAfter, () => {
      this.element.innerHTML = this.content;
      if (this.settings.removeBlinkAfterDelay) this.element.classList.remove('blinkcaret');
      this.resolve();
    });
  }
}

},{"./TimeoutUtils":"3SJDS","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3SJDS":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "after", function () {
  return after;
});
function after(ms, doThis, ...withThese) {
  return new Promise(res => {
    const exec = () => withThese ? res(doThis(...withThese)) : res(doThis());
    ms ? window.setTimeout(exec, ms) : exec();
  });
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1QeEp":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "TerminalCommandParser", function () {
  return TerminalCommandParser;
});
class TerminalCommandParser {
  constructor(strToParse, terminal) {
    this.str = strToParse;
    this.terminal = terminal;
    this.valid = this.parse();
  }
  parse() {
    if (!this.validate()) return false;
    const split = this.str.split(' ');
    this.identifier = split.splice(0, 1)[0].trim().toLowerCase();
    this.args = [...split];
    const foundCommand = this.terminal.getCommands().find(cmd => cmd.getProperties().identifier.toLowerCase() === this.identifier);
    if (!foundCommand) return false;
    this.command = foundCommand;
    return true;
  }
  validate() {
    if (!this.str.trim()) return false;
    if (this.str.split(' ')[0].includes("'")) return false;
    return true;
  }
  isValid() {
    return this.valid;
  }
  hasArgs() {
    return !!this.args.length;
  }
  getCommand() {
    return this.command;
  }
  getIdentifier() {
    return this.identifier;
  }
  getArgs() {
    return this.args;
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["69fNU","3rfh7"], "3rfh7", "parcelRequire6645")

//# sourceMappingURL=index.a6e1a030.js.map
