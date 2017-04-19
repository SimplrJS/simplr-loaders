System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "libs/github/*",
    "npm:*": "libs/npm/*"
  },
  map: {
    "simplr-loaders": "./simplr-loaders/simplr-loaders"
  }
});