'use strict';

const assert = require('chai').assert;
const config = require('..');

suite('Complete Coverage configuration Suite:', () => {
    test('Should extend correct base config', () => {
        assert.deepEqual(config.extends, '@swellaby/nyc-config');
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
});