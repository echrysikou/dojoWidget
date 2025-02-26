import { p as promiseResolve, b as bootstrapLazy } from './index-fdeffe27.js';
export { s as setNonce } from './index-fdeffe27.js';
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
  return bootstrapLazy([["amount-buttons_11",[[0,"tt-widget",{"wId":[1537,"w-id"],"language":[1],"error":[32],"loading":[32],"data":[32],"currentLanguage":[32]},null,{"lang":["setLanguage"]}],[0,"full-widget"],[1,"button-widget"],[1,"qr-code-widget",{"wId":[1,"w-id"]}],[0,"select-amount"],[0,"stripe-payment",{"stripe":[32],"elements":[32],"paymentElement":[32],"paymentElementOptions":[32],"appearance":[32],"isLoading":[32],"disablePayButton":[32],"isHovered":[32],"errorMsg":[32]}],[0,"collaborators-list"],[0,"amount-buttons",{"hoveredButton":[32]}],[0,"amount-input",{"maxDecimals":[2,"max-decimals"],"selectedAmount":[32],"isHovered":[32],"amountTooLow":[32]},null,{"selectedAmount":["watchAmount"]}],[1,"app-loader",{"height":[2],"color":[1]}],[1,"app-typography",{"variant":[1],"fontFamily":[1,"font-family"],"styleProps":[16]}]]]], options);
});

//# sourceMappingURL=taktakwidget.js.map