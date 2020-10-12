'use strict';

var fs = require('fs');
var path = require('path');

function listJsFiles(fileOrDir, recursive) {
  fileOrDir = path.resolve(fileOrDir);
  if (recursive) {
    return listDescendantJsFiles(fileOrDir, []);
  }
  return listChildJsFiles(fileOrDir).filter(isJs);
}

function isJs(filePath) {
  return (path.extname(filePath) === '.js');
}

function isFile(filePath) {
  var stat = fs.statSync(filePath);
  return stat.isFile();
}

function listChildJsFiles(fileOrDir) {
  var stat = fs.statSync(fileOrDir);
  if (stat.isFile()) {
    return [fileOrDir].filter(isJs);
  }
  /* istanbul ignore else */
  if (stat.isDirectory()) {
    return fs.readdirSync(fileOrDir)
      .filter(isJs)
      .map(toFilePath)
      .filter(isFile);
  }
  /* istanbul ignore next */
  return [];

  function toFilePath(fileName) {
    return path.join(fileOrDir, fileName);
  }
}

function listDescendantJsFiles(fileOrDir, array) {
  var stat = fs.statSync(fileOrDir);
  if (stat.isFile()) {
    if (isJs(fileOrDir)) {
      array.push(fileOrDir);
    }
  } else /* istanbul ignore else */ if (stat.isDirectory()) {
    fs.readdirSync(fileOrDir).forEach(function(fileName) {
      listDescendantJsFiles(path.join(fileOrDir, fileName), array);
    });
  }
  return array;
}

module.exports = listJsFiles;
