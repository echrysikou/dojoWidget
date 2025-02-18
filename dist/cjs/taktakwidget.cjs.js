'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-acf8f2f0.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('taktakwidget.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["button-widget_4.cjs",[[0,"tt-widget",{"wId":[1537,"w-id"],"language":[1],"error":[32],"loading":[32],"data":[32],"currentLanguage":[32]},null,{"lang":["setLanguage"]}],[1,"button-widget"],[1,"full-widget"],[1,"qr-code-widget",{"wId":[1,"w-id"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=taktakwidget.cjs.js.map