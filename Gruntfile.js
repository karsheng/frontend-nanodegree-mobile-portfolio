module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'src/index.html'     // 'destination': 'source'
        }
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
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['img_src/fixed/*.{gif,jpg,png}'],
          dest: 'img/',
          flatten: true,
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['htmlmin']);

};
