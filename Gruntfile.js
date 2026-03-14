module.exports = function(grunt) {

  // Configuração das tarefas
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compilação do LESS
    less: {
      development: {
        files: {
          'dist/css/estilo.css': 'src/less/estilo.less'
        }
      }
    },

    // Compressão de JavaScript
    uglify: {
      build: {
        files: {
          'dist/js/script.min.js': ['src/js/script.js']
        }
      }
    }
  });

  // Carregar os plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Registrar tarefas padrão
  grunt.registerTask('default', ['less', 'uglify']);
};
