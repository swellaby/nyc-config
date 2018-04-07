'use strict';

const assert = require('chai').assert;
const config = require('..');

suite('Partial Coverage configuration Suite:', () => {
    test('Should extend correct base config', () => {
        assert.deepEqual(config.extends, '@swellaby/nyc-config');
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