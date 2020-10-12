'use strict';

var assert = require('assert');
var path = require('path');
var findupProjectDir = require('../../lib/findup-project-dir');

describe('lib: findup-project-dir', function() {

  var fixturesDir = path.resolve(__dirname, '../fixtures/findup-project-dir');

  it('When a starting package is the project dir', function() {
    var dir1 = path.resolve(fixturesDir, 'd1');
    var cwd = path.resolve(fixturesDir, 'd5');
    assert.equal(findupProjectDir(dir1, cwd), dir1);
  });

  it('When a starting package is installed locally', function() {
    var dir1 = path.resolve(fixturesDir, 'd1');
    var dir2 = path.resolve(fixturesDir, 'd1/node_modules/d2');
    var cwd = path.resolve(fixturesDir, 'd5');
    assert.equal(findupProjectDir(dir2, cwd), dir1);
  });

  it('When a starting package is installed globally', function() {
    var dir4 = path.resolve(fixturesDir, 'd3/node_modules/d4');
    var cwd = path.resolve(fixturesDir, 'd5');
    var pkgDir = path.resolve(__dirname, '../..');
    assert.equal(findupProjectDir(dir4, cwd), pkgDir);
  });

  it('When a project dir is not found', function() {
    var dir4 = path.resolve(fixturesDir, 'd3/node_modules/d4');
    var cwd = path.resolve('/');
    assert.equal(findupProjectDir(dir4, cwd), null);
  });
});
