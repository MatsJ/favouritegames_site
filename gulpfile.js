//packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

//jshint
gulp.task('jshint', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/stylesheets'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('build-js', function() {
  return gulp.src('source/js/**/*.js')
  .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/js'));
});

gulp.task('img', function() {
  return gulp.src('source/img/**/*.jpg')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    optimizationLevel: 3
  }))
  .pipe(gulp.dest('public/assets/img'));
});

gulp.task('build', ['build-css', 'build-js', 'img']);

//what files to watch
gulp.task('watch', ['browserSync', 'build-css', 'build-js', 'img'], function() {
  gulp.watch('source/js/**/*.js', ['jshint']);
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('default', ['watch']);
