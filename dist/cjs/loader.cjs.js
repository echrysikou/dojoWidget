'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-49db04a4.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["amount-buttons_11.cjs",[[0,"tt-widget",{"wId":[1537,"w-id"],"language":[1],"error":[32],"loading":[32],"data":[32],"currentLanguage":[32]},null,{"lang":["setLanguage"]}],[0,"full-widget"],[1,"button-widget"],[1,"qr-code-widget",{"wId":[1,"w-id"]}],[0,"select-amount"],[0,"stripe-payment",{"stripe":[32],"elements":[32],"paymentElement":[32],"paymentElementOptions":[32],"appearance":[32],"isLoading":[32],"disablePayButton":[32],"isHovered":[32],"errorMsg":[32]}],[0,"collaborators-list"],[0,"amount-buttons",{"hoveredButton":[32]}],[0,"amount-input",{"maxDecimals":[2,"max-decimals"],"selectedAmount":[32],"isHovered":[32],"amountTooLow":[32]},null,{"selectedAmount":["watchAmount"]}],[1,"app-loader",{"height":[2],"color":[1]}],[1,"app-typography",{"variant":[1],"fontFamily":[1,"font-family"],"styleProps":[16]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map