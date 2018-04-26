'use strict';

const assert = require('chai').assert;
const index = require('..');
const baseConfig = require('../base.json');
const completeCoverageConfig = require('../complete-coverage.json');
const partialCoverageConfig = require('../partial-coverage.json');

suite('index Suite:', () => {
    test('Should default export the complete-coverage config', () => {
        assert.deepEqual(index, completeCoverageConfig);
    });

    test('Should export the partial-coverage config in property', () => {
        assert.deepEqual(index.partialCoverageConfig, partialCoverageConfig);
    });

    test('Should export the base config in property', () => {
        assert.deepEqual(index.baseConfig, baseConfig);
    });
});