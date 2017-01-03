module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {},
      build: {
        src: 'lintTest.js',
        dest: 'dist-grunt/lintTest.min.js'
      }
    },
    jshint: {
      files: ['gruntfile.js', 'lintTest.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
        files: ['lintTest.js'],
        tasks: ['uglify', 'jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify','jshint']);
};
