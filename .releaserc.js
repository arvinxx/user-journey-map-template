const { createConfig } = require("semantic-release-config-gitmoji");

const config = createConfig({
  githubAssets: ["src/map.yml"],
});
module.exports = config;
