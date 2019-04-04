
module.exports = {
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || 'chrome',
  },
  baseUrl: process.env.APP_URL || 'https://www.pokemon.com/us',
};
