'use strict';

const assert = require('chai').assert;
const config = require('../complete-coverage.json');
const utils = require('./utils');

suite('Complete Coverage configuration Suite:', () => {
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

    test('Should set line coverage threshold to 100%', () => {
        assert.deepEqual(config.lines, 100);
    });

    test('Should set statement coverage threshold to 100%', () => {
        assert.deepEqual(config.statements, 100);
    });

    test('Should set function coverage threshold to 100%', () => {
        assert.deepEqual(config.functions, 100);
    });

    test('Should set branch coverage threshold to 100%', () => {
        assert.deepEqual(config.branches, 100);
    });

    test('Should enable code coverage enforcement', () => {
        assert.isTrue(config['check-coverage']);
    });

    test('Should have correct report-dir', () => {
        assert.deepEqual(config['report-dir'], utils.coverageDirectory);
    });

    test('Should not contain `include` key', () => {
        assert.isUndefined(config.include);
    });
});
