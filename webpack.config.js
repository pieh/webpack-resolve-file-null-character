const path = require("path");

// transient dependency of this package cause following warning:
// [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Resolving 'es5-ext/string/#/contains/is-implemented' in /Users/misiek/dev/es5-next-null-character/node_modules/es5-ext/string/#/contains for build dependencies doesn't lead to expected result '/Users/misiek/dev/es5-next-null-character/node_modules/es5-ext/string/#/contains/is-implemented.js', but to '/Users/misiek/dev/es5-next-null-character/node_modules/es5-ext/string/#/contains/is-implemented.js' instead. Resolving dependencies are ignored for this path.
require("memoizee");

module.exports = {
  entry: "./index.js",
  mode: "production",
  cache: {
    type: "filesystem",
    cacheLocation: path.join(process.cwd(), `.webpack-fs-cache`),
  },
};
