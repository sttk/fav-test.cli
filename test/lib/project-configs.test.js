'use strict';

var assert = require('assert');
var path = require('path');
var getProjectConfigs = require('../../lib/project-configs');

describe('lib: project-configs', function() {

  var fixturesDir = path.resolve(__dirname, '../fixtures/project-configs');

  it('Get a project config file', function() {
    var startingPkgDir = path.join(fixturesDir, 'd1/node_modules/d2');
    var cwd = path.join(fixturesDir, 'd3/node_modules/d4');
    var configs = getProjectConfigs('.myapp', startingPkgDir, cwd);
    assert.deepEqual(configs, {
      color: true,
      delay: false,
      recursive: true,
      retries: 3,
      slow: 75,
      timeout: 5000,
    });
  });

  it('There are no project config file', function() {
    var startingPkgDir = path.join(fixturesDir, 'd3/node_modules/d4');
    var cwd = path.join(fixturesDir, 'd3/node_modules/d4');
    var configs = getProjectConfigs('.myapp', startingPkgDir, cwd);
    assert.deepEqual(configs, {
      color: null,
      delay: false,
      recursive: false,
      retries: 0,
      slow: 75,
      timeout: 2000,
    });
  });

});

