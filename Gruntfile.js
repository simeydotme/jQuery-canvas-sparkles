/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*!\n * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n *\n' + ' * <%= pkg.homepage %>\n' + ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' + ' *\n */\n\n',

        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/js/jquery-canvas-sparkles.js'],
                dest: 'dist/jquery-canvas-sparkles.js'
            }
        },


        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/jquery-canvas-sparkles.min.js'
            }
        },


        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            bower: {
                src: ['bower.json']
            },
            npm: {
                src: ['package.json']
            },
            lib_test: {
                src: ['src/js/*.js']
            }
        },


        copy: {
            options: {
                banner: '<%= banner %>'
            },
            main: {
                files: [{
                    src: ['src/css/*'],
                    dest: 'dist/',
                    filter: 'isFile',
                    expand: true,
                    flatten: true
                }]
            }
        },

        watch: {

            scripts: {
                files: '**/*.js',
                tasks: ['jshint']
            }

        }


    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'copy']);

};
