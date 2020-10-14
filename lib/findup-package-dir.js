'use strict';

var fs = require('fs');
var path = require('path');
var pathParse = require('@fav/path.parse');

function findupPackageDir(startingPackageDir) {
  var pkgDir = path.resolve(startingPackageDir);

  while (true) {
    var packageJson;
    try {
      packageJson = loadJson(pkgDir, 'package.json');
    } catch (e) {
      return null;  // Maybe the starting package is installed globally
    }

    var packageName = packageJson.name;
    var foundDir = findupParentPackageDir(pkgDir, packageName);
    if (!foundDir) {
      return pkgDir;
    }
    pkgDir = foundDir;
  }
}

function loadJson(dir, jsonFile) {
  return JSON.parse(fs.readFileSync(path.join(dir, jsonFile)));
}

function findupParentPackageDir(dir, packageName) {
  var nameParts = packageName.split('/');

  var parsed;
  for (var i = nameParts.length - 1; i >= 0; i--) {
    parsed = pathParse(dir);
    if (parsed.base !== nameParts[i]) {
      return null;
    }
    /* istanbul ignore if */
    if (parsed.dir === parsed.root) {
      return null;
    }
    dir = parsed.dir;
  }

  parsed = pathParse(dir);
  if (parsed.base !== 'node_modules') {
    return null;
  }
  return parsed.dir;
}

module.exports = findupPackageDir;
