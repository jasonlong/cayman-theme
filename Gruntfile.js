module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      options: {
        spawn: false
      },
      sass: {
        files: 'scss/*.scss',
        tasks: ['sass', 'postcss', 'bsReload:css']
      },
      html: {
        files: '*.html',
        tasks: ['bsReload:all']
      }
    },

    sass: {
      options: {
        precision: 6,
        sourceComments: false
      },
      dist: {
        files: {
          'css/cayman.css': 'scss/cayman.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']})
        ]
      },
      dist: {
        files: {
          'css/cayman.css': 'css/cayman.css'
        }
      }
    },

    browserSync: {
      dev: {
        options: {
          server: "./",
          background: true
        }
      }
    },

    bsReload: {
      css: {
        reload: "cayman.css"
      },
      all: {
        reload: true
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Generate and format the CSS
  grunt.registerTask('default', ['browserSync', 'watch']);

};
