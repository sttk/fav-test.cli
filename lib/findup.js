'use strict';

var fs = require('fs');
var path = require('path');

function findup(fileName, startingDir) {
  var dir = path.resolve(startingDir);
  var root = path.parse(dir).root;

  do {
    var found = find(fileName, dir);
    if (found) {
      return found;
    }

    dir = path.dirname(dir);
  } while (dir !== root);

  return find(fileName, root);
}

function find(fileName, dir) {
  var fnames;
  try {
    fnames = fs.readdirSync(dir);
  } catch (e) {
    return null;
  }
  for (var i = 0, n = fnames.length; i < n; i++) {
    if (fnames[i] === fileName) {
      var found = path.resolve(dir, fileName);
      try {
        var stat = fs.statSync(found);
        if (stat.isFile()) {
          return found;
        }
      } catch (e) {}
    }
  }
  return null;
}

module.exports = findup;
