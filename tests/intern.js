// Learn more about configuring this file at <https://theintern.github.io/intern/#configuration>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites
define({
	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// <https://theintern.github.io/intern/#option-capabilities> for links to the different capabilities options for
	// different services.

	proxyPort: 9000,

	// A fully qualified URL to the Intern proxy
	proxyUrl: 'http://localhost:9000/',

	// Note that the `build` capability will be filled in with the current commit ID or build tag from the CI
	// environment automatically
	capabilities: {
		'browserstack.selenium_version': '2.46.0'
	},

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		// { browserName: 'internet explorer', version: '11', platform: 'WIN8' },
		// { browserName: 'internet explorer', version: '10', platform: 'WIN8' },
		// { browserName: 'internet explorer', version: '9', platform: 'WINDOWS' },
		// { browserName: 'firefox', version: '37', platform: [ 'WINDOWS', 'MAC' ] },
		// { browserName: 'chrome', version: '39', platform: [ 'WINDOWS', 'MAC' ] },
		{ browserName: 'chrome', version: '50' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 2,

	// Name of the tunnel class to use for WebDriver tests.
	// See <https://theintern.github.io/intern/#option-tunnel> for built-in options
	tunnel: 'NullTunnel',

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4444
	},

	// Configuration options for the module loader; any AMD configuration options supported by the AMD loader in use
	// can be used here.
	// If you want to use a different loader than the default loader, see
	// <https://theintern.github.io/intern/#option-useLoader> for instruction
	loaderOptions: {
		// Packages that should be registered with the loader in each testing environment
		packages: [
			{ name: 'js', location: 'build/map/js' },
			{ name: 'vendor', location: 'build/vendor' },
			{ name: 'report', location: 'build/report/js' },
			{ name: 'utils', location: 'build/map/js/utils' },
			{ name: 'stores', location: 'build/map/js/stores' },
			{ name: 'actions', location: 'build/map/js/actions' },
			{ name: 'components', location: 'build/map/js/components' }
		],
		map: {
			'*': {
				'lodash': 'build/vendor/lodash/lodash.js'
			}
		}
	},

	// Non-functional test suite(s) to run in each browser
	suites: ['tests/unit/appUtils', 'tests/unit/configTest', 'tests/unit/paramsTest'],

	// Functional test suite(s) to execute against each browser once non-functional tests are completed
	functionalSuites: [ 'tests/functional/index' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(?:tests|node_modules|build\/vendor)\//
});
