const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    headedChrome: {
      browser: "chrome",
      headless: false
    },
    headlessChrome: {
      browser: "chrome",
      headless: true
    },
    headedFirefox: {
      browser: "firefox",
      headless: false
    },
    headlessFirefox: {
      browser: "firefox",
      headless: true
    }
  }
});