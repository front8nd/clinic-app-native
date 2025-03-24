const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.sourceExts = [
//   ...defaultConfig.resolver.sourceExts,
//   "jsx",
//   "js",
//   "ts",
//   "tsx",
// ];

// // Add alias support properly
// defaultConfig.resolver.alias = {
//   ...defaultConfig.resolver.alias,
//   "@": "./src",
// };

module.exports = withNativeWind(defaultConfig, { input: "./global.css" });
