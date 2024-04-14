const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com/",
    retries:{"openMode":2},
    viewportHeight:1080,
    viewportWidth:1920,
    pageLoadTimeout:10000,//page load wait
    defaultCommandTimeout:20000,//any command timeout-wait
    watchForFileChanges:false,
    video:true,
    env:{
      "username":"Stagingusername",
      "password":"admin123"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
