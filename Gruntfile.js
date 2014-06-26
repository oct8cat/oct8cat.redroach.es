'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            index: {
                src: 'src/index.jade',
                dest: 'public/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
};
