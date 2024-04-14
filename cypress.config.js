const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com/",
    retries:{"openMode":1},
    viewportHeight:1080,
    viewportWidth:1920,
    pageLoadTimeout:10000,//page load wait
    defaultCommandTimeout:20000,//any command timeout-wait
    watchForFileChanges:true,
    video:true,
    env:{
      "username":"Admin",
      "password":"admin123"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
