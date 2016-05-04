require("babel-core/register")({presets: ["es2015"]})

exports.config = {
	directConnect: true,

	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		require: [
			'./../e2e/**/*.step.js'
		]
	},

	suites: {
		calculator: './../e2e/calculator/**/*.feature'
	},

	capabilities: {
		'browserName': 'chrome'
	},

};