const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');

function cleanDist() {
    return src('./dist', { read: false })
    .pipe(clean())
}

// function minimize() {
//     return src('./dist/**')
//         .pipe(uglify())
// }

function copyHtml() {
    return src('./src/index.html')
    .pipe(dest('./dist'))
}

function copyJs() {
    return src('./src/**/*.js')
        .pipe(concat('all.js'))
    .pipe(dest('./dist'))
}

function copyCss() {
    return src('./src/styles/styles.css')
    .pipe(dest('./dist'))
}

function watchFiiles() {
    watch('./src/**/*.js', {events:'all'}, copyJs)
}

module.exports = {
    build: series(cleanDist, parallel(copyJs, copyHtml, copyCss)),
    serve: series(cleanDist, parallel(copyJs, copyHtml, copyCss), watchFiiles)
}