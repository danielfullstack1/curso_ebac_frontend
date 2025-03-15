gulpfile.js
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Para compilar SASS
const imagemin = require('gulp-imagemin'); // Para compressão de imagens
const uglify = require('gulp-uglify'); // Para compressão de JavaScript

// 1) Tarefa para compilar SASS
function compileSass() {
  return src('src/scss/**/*.scss') // Caminho dos arquivos SASS
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila e comprime o CSS
    .pipe(dest('dist/css')); // Pasta de destino do CSS compilado
}

// 2) Tarefa para comprimir imagens
function compressImages() {
  return src('src/images/**/*.{jpg,jpeg,png,gif,svg}') // Caminho das imagens
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 75, progressive: true }), // Compressão para JPEG
      imagemin.optipng({ optimizationLevel: 5 }), // Compressão para PNG
      imagemin.svgo() // Compressão para SVG
    ]))
    .pipe(dest('dist/images')); // Pasta de destino das imagens comprimidas
}

// 3) Tarefa para comprimir JavaScript
function compressJs() {
  return src('src/js/**/*.js') // Caminho dos arquivos JS
    .pipe(uglify()) // Comprime o JavaScript
    .pipe(dest('dist/js')); // Pasta de destino do JS comprimido
}

// Tarefa padrão (executa todas as tarefas em paralelo)
exports.default = parallel(compileSass, compressImages, compressJs);

// Tarefa para assistir mudanças nos arquivos e executar as tarefas automaticamente
exports.watch = function () {
  watch('src/scss/**/*.scss', compileSass); // Monitora mudanças no SASS
  watch('src/images/**/*.{jpg,jpeg,png,gif,svg}', compressImages); // Monitora mudanças nas imagens
  watch('src/js/**/*.js', compressJs); // Monitora mudanças no JS
};