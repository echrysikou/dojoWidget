import { b as bootstrapLazy } from './index-d8b0d3e7.js';
export { s as setNonce } from './index-d8b0d3e7.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["button-widget_4",[[0,"tt-widget",{"wId":[1537,"w-id"],"language":[1],"error":[32],"loading":[32],"data":[32],"currentLanguage":[32]},null,{"lang":["setLanguage"]}],[1,"button-widget"],[1,"full-widget"],[1,"qr-code-widget",{"wId":[1,"w-id"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map