module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@app/api":"./src/api",
          "@app/assets": "./src/assets",
          "@app/components": "./src/components",
          "@app/constants": "./src/constants",
          "@app/screens": "./src/screens",
          "@app/navigations": "./src/navigations",
          "@app/store": "./src/store",
          "@app/logic": "./src/logic",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
