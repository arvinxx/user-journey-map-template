const createConfig = require("semantic-release-config-gitmoji/lib/createConfig");

const config = createConfig({
  githubAssets: ["src/*.yml"],
});
module.exports = config;
