'use strict';

const assert = require('chai').assert;
const config = require('../base.json');

suite('Base configuration Suite:', () => {
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
});