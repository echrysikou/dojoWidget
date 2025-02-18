import { p as promiseResolve, b as bootstrapLazy } from './index-fb0bbb79.js';
export { s as setNonce } from './index-fb0bbb79.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.21.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["button-widget_4",[[0,"tt-widget",{"wId":[1537,"w-id"],"language":[1],"error":[32],"loading":[32],"data":[32],"currentLanguage":[32]},null,{"lang":["setLanguage"]}],[1,"button-widget"],[1,"full-widget"],[1,"qr-code-widget",{"wId":[1,"w-id"]}]]]], options);
});

//# sourceMappingURL=taktakwidget.js.map