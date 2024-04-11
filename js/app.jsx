import { checkForMissingPlugins } from "@mapstore/utils/DebugUtils";
import main from "@mapstore/product/main";

import m2Plugins from "@mapstore/product/plugins";
import customPlugins from "./plugins";
const ConfigUtils = require("@mapstore/utils/ConfigUtils").default;

// Set translations path and theme prefix
ConfigUtils.setConfigProp(
  "translationsPath",
  "./MapStore2/web/client/translations"
);
ConfigUtils.setConfigProp("themePrefix", "my_project");

ConfigUtils.setConfigProp(
  "translationsPath",
  "./MapStore2/web/client/translations"
);
ConfigUtils.setConfigProp("themePrefix", "mapstore");

ConfigUtils.setLocalConfigurationFile("configs/appConfig.json");

const appConfig = require("@mapstore/product/appConfig").default;

const plugins = require("@mapstore/product/plugins").default;

checkForMissingPlugins(plugins.plugins);

const allPlugins = {
  ...m2Plugins,
  plugins: {
    ...customPlugins.plugins,
    ...m2Plugins.plugins,
  },
};

main(appConfig, allPlugins);
