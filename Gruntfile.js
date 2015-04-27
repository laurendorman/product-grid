module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        cwd: 'source',
        src: [ '**', '!css/base', '!css/layouts', '!css/modules', '!css/states', '!**/*.scss' ],
        dest: 'build',
        expand: true
      }
    },
    clean: {
        build: {
          src: [ 'build' ]
       }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['**/*.scss'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    autoprefixer:{
      dist: {
        files:{
          'build/css/styles.css':'build/css/styles.css'
        }
      }
    },
    watch: {
      css: {
        files: 'source/css/**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('build',['clean', 'copy']);
  grunt.registerTask('default',['watch']);
}