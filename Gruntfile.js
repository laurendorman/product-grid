module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css/scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    autoprefixer:{
      dist: {
        files:{
          'css/styles.css':'css/styles.css'
        }
      }
    },
    watch: {
      css: {
        files: 'css/**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}