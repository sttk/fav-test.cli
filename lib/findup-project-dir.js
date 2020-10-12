'use strict';

var path = require('path');
var findupPackageDir = require('./findup-package-dir');
var findup = require('./findup');

function findupProjectDir(startingPackageDir, cwd) {
  var pkgDir = findupPackageDir(startingPackageDir);

  // When the starting package is installed locally
  if (pkgDir) {
    return pkgDir;
  }

  // When the starting package is installed globally, etc.
  var filePath = findup('package.json', cwd);
  if (filePath) {
    return path.dirname(filePath);
  }
  return null;
}

module.exports = findupProjectDir;
