'use strict';

const assert = require('chai').assert;
const config = require('../base.json');
const utils = require('./utils');

suite('Base configuration Suite:', () => {
    test('Should have correct set of reporters', () => {
        const reporters = config.reporter;
        assert.deepEqual(reporters.length, 5);
        assert.isTrue(reporters.includes(utils.reporters.html));
        assert.isTrue(reporters.includes(utils.reporters.lcov));
        assert.isTrue(reporters.includes(utils.reporters.cobertura));
        assert.isTrue(reporters.includes(utils.reporters.text));
        assert.isTrue(reporters.includes(utils.reporters.textSummary));
    });

    test('Should enable cache', () => {
        assert.isTrue(config.cache);
    });

    test('Should enable all/aggregate coverage', () => {
        assert.isTrue(config.all);
    });

    test('Should enable per-file coverage', () => {
        assert.isTrue(config['per-file']);
    });

    test('Should have correct report-dir', () => {
        assert.deepEqual(config['report-dir'], utils.coverageDirectory);
    });

    test('Should have correct set of include paths', () => {
        const includePaths = config.include;
        assert.deepEqual(includePaths.length, 4);
        assert.isTrue(includePaths.includes(utils.includePaths.srcPath));
        assert.isTrue(includePaths.includes(utils.includePaths.libPath));
        assert.isTrue(includePaths.includes(utils.includePaths.binPath));
        assert.isTrue(includePaths.includes(utils.includePaths.tasksPath));
    });
});