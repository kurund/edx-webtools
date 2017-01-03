var gulp = require('gulp');
var ugilfy = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('default', ['uglify', 'lint']);

gulp.task('uglify');

gulp.task('uglify', function() {
  return watch('lintTest.js', { ignoreInitial: false })
    .pipe(gulp.src('lintTest.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist-gulp'))
    );
});

gulp.task('lint', function() {
  return watch('lintTest.js', { ignoreInitial: false })
    .pipe(gulp.src('lintTest.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
    );

});
