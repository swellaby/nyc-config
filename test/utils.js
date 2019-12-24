'use strict';

module.exports = {
    reporters: {
        html: 'html',
        cobertura: 'cobertura',
        lcov: 'lcov',
        text: 'text',
        textSummary: 'text-summary'
    },
    coverageDirectory: '.coverage',
    includePaths: {
        srcPath: 'src/**/*',
        libPath: 'lib/**/*',
        binPath: 'bin/**/*',
        tasksPath: 'tasks/**/*',
    }
};
