/* global exports:true */



exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    "e2e/main.js"
  ],

  capabilities: {
    "browserName":"chrome",
    "chromeDriver":"node_modules/protractor/bin/webdriver-manager"
  },

  baseUrl: "http://localhost:9000/",

  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
