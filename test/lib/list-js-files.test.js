'use strict';

var path = require('path');
var listJsFiles = require('../../lib/list-js-files');
var assert = require('assert');

describe('lib: list-js-files', function() {

  var fixturesDir = path.resolve(__dirname, '../fixtures/list-js-files');

  it('The argument is a file and not recursive', function() {
    var aFile = path.resolve(fixturesDir, 'f1_1.js');
    var result = listJsFiles(aFile);
    assert.deepEqual(result, [aFile]);
  });

  it('The argument is a file and recursive', function() {
    var aFile = path.resolve(fixturesDir, 'f1_1.js');
    var result = listJsFiles(aFile, true);
    assert.deepEqual(result, [aFile]);
  });

  it('The argument is a directory and not recursive', function() {
    var aDir = path.resolve(fixturesDir, 'd1');
    var result = listJsFiles(aDir);
    assert.deepEqual(result, [
      path.resolve(aDir, 'f2-1.js'),
      path.resolve(aDir, 'f2-2.js'),
    ]);
  });

  it('The argument is a directory and recursive', function() {
    var aDir = path.resolve(fixturesDir, 'd1');
    var result = listJsFiles(aDir, true);
    assert.deepEqual(result, [
      path.resolve(aDir, 'd2', 'f3_2.js'),
      path.resolve(aDir, 'f2-1.js'),
      path.resolve(aDir, 'f2-2.js'),
    ]);
  });

});
