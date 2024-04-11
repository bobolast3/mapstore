const path = require("path");

//const themeEntries = require("./MapStore2/build/themes.js").themeEntries;
const extractThemesPlugin =
  require("./MapStore2/build/themes.js").extractThemesPlugin;
const ModuleFederationPlugin =
  require("./MapStore2/build/moduleFederation").plugin;

module.exports = require("./MapStore2/build/buildConfig")({
  bundles: {
    mapstore: path.join(__dirname, "js", "app"),
    "mapstore-embedded": path.join(__dirname, "js", "embedded"),
    "mapstore-api": path.join(
      __dirname,
      "MapStore2",
      "web",
      "client",
      "product",
      "api"
    ),
    "geostory-embedded": path.join(__dirname, "js", "geostoryEmbedded"),
    "dashboard-embedded": path.join(__dirname, "js", "dashboardEmbedded"),
  },
  themeEntries: {
    "themes/default": path.join(__dirname, "themes", "default", "theme.less"),
  },
  paths: {
    base: __dirname,
    dist: path.join(__dirname, "dist"),
    framework: path.join(__dirname, "MapStore2", "web", "client"),
    code: [
      path.join(__dirname, "js"),
      path.join(__dirname, "MapStore2", "web", "client"),
    ],
  },
  plugins: [extractThemesPlugin, ModuleFederationPlugin],
  prod: false,
  publicPath: undefined,
  cssPrefix: ".mapstore",
  prodPlugins: [],
  alias: {
    "@mapstore/patcher": path.resolve(
      __dirname,
      "node_modules",
      "@mapstore",
      "patcher"
    ),
    "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
    "@js": path.resolve(__dirname, "js"),
  },
});
