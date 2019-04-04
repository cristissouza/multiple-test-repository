// import reporter from 'cucumber-html-reporter';
const reporter = require('cucumber-html-reporter')
const env = require('./enviroment');

exports.config = {
  SELENIUM_PROMISE_MANAGER: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  ignoreUncaughtExceptions: true,
  baseUrl: env.baseUrl,
  specs: ['features/*.feature'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu',
        '--start-maximized',
        '--disable-impl-side-painting',
      ],
    },
  },
  onCleanUp() {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'results.html',
      launchReport: true,
    };
    return reporter.generate(options);
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'features/step_definitions/*.steps.js',
    tags: ['@Test'],
    format: ['json:results.json'],
    profile: false,
    ignoreUndefinedDefinitions: true,
    'no-source': true,
  },
};
