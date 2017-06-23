/** 
 * gulp依赖
 * npm install  --save-dev gulp gulp-minify-css gulp-autoprefixer gulp-sourcemaps gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-webpack
 */

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    //jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpwebpack = require('gulp-webpack'),
    webpack = require('webpack'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

var notify = require("gulp-notify");
// var markdown = require('gulp-markdown');
var css_path="./public/css/" 
var css_src_path="./src/css/"
var js_path="./public/js/"
var js_src_path="./src/app/"

/**
 * 删除css
 */
gulp.task('clean-css', function(){
    return gulp.src(css_path+'.min.css')
        .pipe(clean());
});


/**
 * 合并css
 */
gulp.task('css', ['clean-css'], function(){
    return gulp.src(css_src_path+'app.css')
        .pipe(sourcemaps.init())
        .pipe(minifycss({rebase: false, advanced: false, keepBreaks: true}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(css_path));
});

/**
 * 删除js
 */
gulp.task('clean-js', function(){
    return gulp.src(js_path+'(app|lib)?(.min).js')
        .pipe(clean());
});

/**
 * webpack 编译
 */
gulp.task('webpack', ['clean-js'], function(cb){
     return gulp.src(js_src_path+'(app|lib).js')
    //    return gulp.src(js_src_path+'lib.js')
        .pipe(gulpwebpack( require('./webpack.config.js') ))
        .pipe(gulp.dest(js_path))
});

/**
 * 压缩js
 */
gulp.task('js', ['webpack'], function(){
    return gulp.src('./public/js/+(app|lib).js')
        // .pipe(jshint())
        // .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./public/js/'))
        .pipe(notify('<%= file.relative %> build done!'));
});

gulp.task("watch", ['default'], function(){
    gulp.watch('./src/**/**.vue', ['js']);
    gulp.watch('./src/**/**.js', ['js']);
    // gulp.watch('./public/css/app.css', ['css']);
    gulp.watch('./src/css/**.css', ['css']);
});

gulp.task('default', ['css', 'js']);

gulp.task('uglify', ['default'], function(){
    return gulp.src(js_path+'(app|lib).js')
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(js_path));
})

// gulp.task('md', function () {
//     return gulp.src('release-note.md')
//         .pipe(markdown())
//         .pipe(rename('release-note.html'))
//         .pipe(gulp.dest('./'));
// });