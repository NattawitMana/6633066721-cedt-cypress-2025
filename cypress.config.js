const { defineConfig } = require('cypress')
// const {
// 	addMatchImageSnapshotPlugin,
// } = require('@simonsmith/cypress-image-snapshot/plugin')

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			// addMatchImageSnapshotPlugin(on)
		},
		baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
		defaultCommandTimeout: 30000,
		pageLoadTimeout: 120000,
		requestTimeout: 30000,
		responseTimeout: 30000,
		watchForFileChanges: false,
		reporter: 'nyan',
		retries: {
			runMode: 2,
			// openMode: 2
		},
		testIsolation: true,
		// environment variables
		// env: {
		// 	TESTUSER: 'John Doe',
		// 	TESTPWD: 'ThisIsNotAPassasdasdword',
		// },
		projectId: '2n43pn',
		video: true,
	},
})
