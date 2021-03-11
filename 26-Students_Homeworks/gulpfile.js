const { src, dest, series, parallel, watch } = require('gulp');
const config = require('./gulp/config')
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');

function cleanDist() {
    return src(config.dist, { read: false })
    .pipe(clean())
}

function copyHtml() {
    return src('./src/index.html')
    .pipe(dest(config.dist))
}

function copyJs() {
    return src(['./src/mvc/model/Http.js',
        './src/mvc/model/Collection.js',
        './src/mvc/view/StudentView.js',
        './src/mvc/view/StudentFormView.js',
        './src/mvc/view/MarksView.js',
        './src/mvc/controller/*.js',
        './src/app.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
    .pipe(dest(config.dist))
}

function copyVendorJs() {
    return src(['./node_modules/jquery/dist/jquery.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(dest(config.dist))
}

function copyCss() {
    return src('./src/*.css')
    .pipe(dest(config.dist))
}

function watchFiiles() {
    watch('./src/**/*.js', {events:'all'}, copyJs)
}

function server(cb) {
    browserSync.init({
        server: {
            baseDir: config.dist,
        }
    })

    watch('./src/**/*.js', series(copyJs, reloadBrowser));
    watch('./src/*.css', series(copyCss, reloadBrowser));
    cb()
}

function reloadBrowser(cb) {
    browserSync.reload();
    cb()
}

function taskBuild() {
    return parallel(copyJs, copyVendorJs, copyHtml, copyCss);
}

function taskServe() {
    return series(cleanDist, taskBuild(), server);
}

module.exports = {
    build: taskBuild(),
    serve: taskServe()
}