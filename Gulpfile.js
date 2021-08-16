const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));



gulp.task('sass', function()
{
	return gulp.src('./resources/scss/global.scss')
	.pipe(sass())
	.pipe(gulp.dest('./public/css'));
})

gulp.task('watch', function()
{
	gulp.watch('./resources/scss/*.scss', gulp.series('sass'));
})