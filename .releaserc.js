const createConfig = require("semantic-release-config-gitmoji/lib/createConfig");

const config = createConfig({
  githubAssets: ["src/map.yml"],
});
module.exports = config;
