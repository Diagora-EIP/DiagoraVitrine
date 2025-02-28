const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? process.env.PUBLIC_PATH : "/",
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
      },
    },
  },
});
