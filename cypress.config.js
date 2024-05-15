const { defineConfig } = require('cypress')
const { configureVisualRegression } = require('cypress-visual-regression')

module.exports = defineConfig({
  projectId: "xvi7ob",
  e2e: {
    env: {
      visualRegressionType: 'regression',
      experimentalSessionAndOrigin: true

    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
    }
  }
})