'use strict';

var path = require('path');
var findupPackageDir = require('./findup-package-dir');
var findup = require('./findup');

var favTestCliDir = path.resolve(__dirname, '..');

function findupProjectDir(startingPackageDir, cwd) {
  var pkgDir = findupPackageDir(startingPackageDir);

  // When the starting package is installed locally
  if (pkgDir) {
    if (pkgDir !== favTestCliDir) {
      return pkgDir;
    }
    // It's possible that the package is `fav-test.cli` and is made 'npm link'.
  }

  // When the starting package is installed globally, etc.
  var filePath = findup('package.json', cwd);
  if (filePath) {
    return path.dirname(filePath);
  }

  return pkgDir;
}

module.exports = findupProjectDir;
