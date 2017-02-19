module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';\n',

            },
            concatLibraries: {
                src: ['app/public/lib/angular/angular.min.js',
                    'app/public/lib/angular-animate/angular-animate.min.js',
                    'app/public/lib/angular-ui-router/release/angular-ui-router.min.js',
                    'app/public/lib/oclazyload/dist/ocLazyLoad.min.js',
                ],
                dest: 'app/build/bundle/js/libraries.min.js'
            },
            concatApp: {
                src: ['app/front-end/app.module.js',
                    'app/front-end/common/services/api-interceptors-service.js',
                    'app/front-end/app.routes.js'
                ],
                dest: 'app/build/bundle/js/app.min.js'
            },
            concatStyles: {
                src: ['app/public/lib/bootstrap-css-only/css/bootstrap.min.css',
                    'app/public/lib/font-awesome/css/font-awesome.min.css'
                ],
                dest: 'app/build/bundle/css/libraries.min.css'
            }
        }       
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}