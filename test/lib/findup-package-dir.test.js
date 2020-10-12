'use strict';

var assert = require('assert');
var path = require('path');
var findupPackageDir = require('../../lib/findup-package-dir');

describe('lib: findup-package-dir', function() {

  var pkgDir = path.resolve(__dirname, '../..');
  var pkgRelDir = path.relative(pkgDir, process.cwd());
  var fixturesDir = path.resolve(__dirname, '../fixtures/findup-package-dir');

  it('No ancestor package dir', function() {
    assert.equal(findupPackageDir("/aaa/bbb"), null);
  });

  it('Start from package dir', function() {
    var dir = path.join(__dirname, '../..');
    assert.equal(findupPackageDir(dir), pkgDir);
  });

  it('Start from child dir', function() {
    var dir = path.join(__dirname, '..');
    assert.equal(findupPackageDir(dir), null);
  });

  it('Start from dir in sub package', function() {
    var dir = path.join(__dirname, '../../node_modules/nyc');
    assert.equal(findupPackageDir(dir), pkgDir);
  });

  it('Start from dir in sub package with scope', function() {
    var dir = path.join(__dirname, '../../node_modules/@fav/test.framework');
    assert.equal(findupPackageDir(dir), pkgDir);
  });

  it('Start from root dir', function() {
    assert.equal(findupPackageDir('/'), null);
  });

  it('Start from inexistent dir', function() {
    assert.equal(findupPackageDir('/aaa/bbb'), null);
  });

  it('Start from a package dir in global node_modules/', function() {
    var dir = path.join(fixturesDir, 'd1/node_modules/d2');
    assert.equal(findupPackageDir(dir), null);
  });

  it('Start from a package dir in global node_modules/', function() {
    var dir = path.join(fixturesDir, 'd3');
    assert.equal(findupPackageDir(dir), dir);
  });
});
