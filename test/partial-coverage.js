'use strict';

const assert = require('chai').assert;
const config = require('../partial-coverage.json');

suite('Partial Coverage configuration Suite:', () => {
    test('Should have correct set of reporters', () => {
        const reporters = config.reporter;
        assert.deepEqual(reporters.length, 5);
        assert.isTrue(reporters.includes('html'));
        assert.isTrue(reporters.includes('lcov'));
        assert.isTrue(reporters.includes('cobertura'));
        assert.isTrue(reporters.includes('text'));
        assert.isTrue(reporters.includes('text-summary'));
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

    test('Should set line coverage threshold to 75%', () => {
        assert.deepEqual(config.lines, 75);
    });

    test('Should set statement coverage threshold to 75%', () => {
        assert.deepEqual(config.statements, 75);
    });

    test('Should set function coverage threshold to 80%', () => {
        assert.deepEqual(config.functions, 80);
    });

    test('Should set branch coverage threshold to 70%', () => {
        assert.deepEqual(config.branches, 70);
    });

    test('Should enable code coverage enforcement', () => {
        assert.isTrue(config['check-coverage']);
    });
});