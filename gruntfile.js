module.exports = function(grunt) {

    var requireJsBaseConfig = {
        baseUrl: "./js",
        paths: {
            backbone: '../lib/backbone',
            underscore: '../lib/underscore',
            jquery: '../lib/jquery.min',
            text: '../lib/text',
            async: '../lib/async'
        },
        shim: {
            backbone: {
                deps: ['underscore'],
                exports: 'Backbone'
            },
            underscore: {
                exports: '_'
            }
        }
    };

    grunt.initConfig({
        watch: {
            script: {
                files: ['./js/*.js'],
                tasks: ['default']
            }
        },

        requirejs: {
            options: {
                baseUrl: requireJsBaseConfig.baseUrl,
                paths: requireJsBaseConfig.paths,
                shim: requireJsBaseConfig.shim,

                //wrap: true,
                optimizeAllPluginResources: true,
                optimize: 'none',
                findNestedDependencies: true
            },

            'main-almond': {
                options: {
                    name: '../lib/almond',
                    include: ['main'],
                    //insertRequire: ['main'],
                    out: './build/main-almond.js'
                }
            },

            'main-requirejs': {
                options: {
                    name: '../lib/require',
                    include: ['main', 'async'],
                    out: './build/main-require.js'
                }
            }
        },

        jshint: {
            scripts: ['js/*.js']
        },

        jasmine: {
            modules: {
                src: 'js/a.js',
                options: {
                    specs: 'tests/a.spec.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: requireJsBaseConfig
                    }
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: 3001,
                    base: 'build'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', ['test', 'requirejs']);
    grunt.registerTask('dev', ['default', 'connect', 'watch']);
};