'use strict';

var assert = require('assert');
var path = require('path');
var findup = require('../../lib/findup');

describe('lib: findup', function() {

  var fixturesDir = path.resolve(__dirname, '../fixtures/findup');
  var expected = path.resolve(fixturesDir, 'd1/package.json');

  it('findup a file in the current directory', function() {
    var dir = path.join(fixturesDir, 'd1');
    assert.equal(findup('package.json', dir), expected);
  });

  it('findup a file in the child directory', function() {
    var dir = path.join(fixturesDir, 'd1/d2');
    assert.equal(findup('package.json', dir), expected);
  });

  it('findup a file in the descendant directory', function() {
    var dir = path.join(fixturesDir, 'd1/d2/d3');
    assert.equal(findup('package.json', dir), expected);
  });

  it('findup inexistent file', function() {
    var dir = path.join(fixturesDir, 'd1/d2/d3');
    assert.equal(findup('xxx', dir), null);
  });

  it('findup inexistent dir', function() {
    var dir = path.join(fixturesDir, 'd1/d2/xx');
    assert.equal(findup('xxx', dir), null);
  });

  it('specified path is a directory', function() {
    var dir = path.join(fixturesDir, 'd1');
    assert.equal(findup('d2', dir), null);
  });

});
