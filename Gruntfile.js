module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },

    uglify: {
      options:{
        mangle: false
      },
      my_target: {
        files: {
          'dist/js/perfmatters.min.js' : ['src/js/perfmatters.js']
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 60,
            quality: 50,
          },
          {
            width: 100,
            height: 60,
            quality: 50,
            aspectRatio: false
          },
          {
            width: 300,
            quality: 50
          },
          {
            width: 500,
            quality: 50
          },{
            width: 800,
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/img_src/',
          dest: 'src/img/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['htmlmin'], ['uglify'], ['responsive_images'], ['cssmin']);

};
