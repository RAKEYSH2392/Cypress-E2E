const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  },
  // Add the following configuration for video recording
  video: true,
  videoUploadOnPasses: false,
  videoCompression: 32,
  videoUploadOnError: true,
  videoS3Region: 'your-region',
  videoS3AccessKeyId: 'your-access-key-id',
  videoS3SecretAccessKey: 'your-secret-access-key',
  videoS3Bucket: 'your-s3-bucket',
});
