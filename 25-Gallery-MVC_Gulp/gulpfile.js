const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');

function cleanDist() {
    return src('./dist', { read: false })
    .pipe(clean())
}

function copyHtml() {
    return src('./src/index.html')
    .pipe(dest('./dist'))
}

function copyJs() {
    return src(['./src/mvc/model/Http.js',
        './src/mvc/model/Collection.js',
        './src/mvc/view/*.js',
        './src/mvc/controller/*.js',
        './src/script.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
    .pipe(dest('./dist'))
}

function copyVendorJs() {
    return src(['./node_modules/jquery/dist/jquery.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(dest('./dist'))
}

function copyCss() {
    return src('./src/*.css')
    .pipe(dest('./dist'))
}

function watchFiiles() {
    watch('./src/**/*.js', {events:'all'}, copyJs)
}

module.exports = {
    build: series(cleanDist, parallel(copyJs, copyVendorJs, copyHtml, copyCss)),
    serve: series(cleanDist, parallel(copyJs, copyVendorJs,copyHtml, copyCss), watchFiiles)
}