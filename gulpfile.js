
var gulp = require('gulp'),

    cssmin = require('gulp-cssmin'),

    htmlmin = require('gulp-htmlmin'),

    autoprefixer = require('gulp-autoprefixer'),

    rev = require('gulp-rev'),

    uglify = require('gulp-uglify'),

    rename = require('gulp-rename');

// 处理css
gulp.task('css', function () {

  return gulp.src('./public/css/main.css')
      .pipe(cssmin())
      .pipe(autoprefixer())
      .pipe(rev())
      .pipe(gulp.dest('./release/public/css'))
      .pipe(rev.manifest())
      .pipe(rename('css-manifest.json'))
      .pipe(gulp.dest('./release/rev'));

});

// 处理js
gulp.task('js', function () {

  return gulp.src('./*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./release'))

})

// 其它
gulp.task('other', function () {

  return gulp.src(['./node_modules/*','./*.json','./.gitignore','./views/*.html'], {base: './'})
      .pipe(gulp.dest('./release'))

})
