'use strict';

var path = require('path');
var findupProjectDir = require('./findup-project-dir');
var assign = require('@fav/prop.assign');

var defaultConfigs = {
  color: null,
  delay: false,
  recursive: false,
  retries: 0,
  slow: 75,
  timeout: 2000,
};

function getProjectConfigs(configFileName, startingPackageDir, cwd) {
  var projectDir = findupProjectDir(startingPackageDir, cwd);
  try {
    var projectConfigs = require(path.join(projectDir, configFileName));
    return assign({}, defaultConfigs, projectConfigs);
  } catch (e) {
    return defaultConfigs;
  }
}

module.exports = getProjectConfigs;

