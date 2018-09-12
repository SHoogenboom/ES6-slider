var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  gulp.src('./sass/index.scss')
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('minify-css', function () {
  return gulp.src('*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
});
gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./index.css', ['minify-css']);
})