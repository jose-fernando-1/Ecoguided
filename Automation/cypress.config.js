const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://192.168.56.1:3000", 
    setupNodeEvents(on, config) {
    },
    viewportWidth: 1280,  
    viewportHeight: 720,  
    defaultCommandTimeout: 10000, 
    retries: 2, 
  },
});
