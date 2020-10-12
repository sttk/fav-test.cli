'use strict';

module.exports = {
  color: {
    type: 'boolean',
    description: 'Force-enable color output',
    alias: ['c', 'colors'],
  },
  delay: {
    type: 'boolean',
    description: 'Delay initial execution of root suite',
  },
  recursive: {
    type: 'boolean',
    description: 'Look for tests in subdirectories',
  },
  retries: {
    type: 'number',
    description: 'Retring times for failed test cases',
  },
  slow: {
    type: 'number',
    description: 'Specify "slow" test threshold (in milliseconds)',
    alias: 's',
  },
  timeout: {
    type: 'number',
    description: 'Specify test timeout threshold',
    alias: ['t', 'timeouts'],
  },
};
