'use strict';

var Framework = require('@fav/test.framework');
var Reporter = require('@fav/test.console-reporter');
var parseArgv = require('@fav/cli.parse-argv');
var assign = require('@fav/prop.assign');
var path = require('path');

var listJsFiles = require('./lib/list-js-files');
var cliOptions = require('./lib/cli-options');
var getProjectConfigs = require('./lib/project-configs');
var findupProjectDir = require('./lib/findup-project-dir');

function launch(appName) {
  var configs = getProjectConfigs('.' + appName, __dirname, process.cwd());
  var argv = parseArgv(cliOptions);
  configs = assign(configs, argv.options);

  var colorDepth;
  /* istanbul ignore next */
  if (configs.color === true) {
    colorDepth = 4;
  } else if (configs.color === false) {
    colorDepth = 1;
  }

  var framework = new Framework();
  var reporter = new Reporter(framework, colorDepth);

  framework._retries = configs.retries;
  framework._slow = configs.slow;
  framework._timeout = configs.timeout;

  global.describe = framework.suite;
  global.it = framework.test;
  global.before = framework.before;
  global.after = framework.after;
  global.beforeEach = framework.beforeEach;
  global.afterEach = framework.afterEach;
  describe.only = framework.onlySuite;
  describe.skip = framework.skipSuite;
  it.only = framework.onlyTest;
  it.skip = framework.skipTest;

  function run() {
    framework.run(function() {
      process.on('exit', onExit);
    });
  }
  function onExit() {
    framework.emit('result');
    /* istanbul ignore next */
    if (reporter.errors && reporter.errors.length > 0) {
      process.exit(1);
    }
  }

  if (configs.delay) {
    global.run = run;
  }

  var files = argv.args;
  if (!files.length) {
    var pkgDir = findupProjectDir(__dirname, process.cwd());
    var testDir = path.join(pkgDir, 'test');
    files = [testDir];
  }
  files.forEach(function(fileOrDir) {
    listJsFiles(fileOrDir, configs.recursive).forEach(require);
  });

  if (!configs.delay) {
    run();
  }
}

module.exports = launch;
