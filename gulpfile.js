var gulp				= require('gulp'),
		gutil				= require('gulp-util'),
		browserify 	= require('gulp-browserify'),
		sass 				= require('gulp-sass');
		concat			=	require('gulp-concat'); // for combining file


var scripts = [
	'components/scripts/five.js',
	'components/scripts/third.js',
	'components/scripts/first.js',
]; // used array for the index order

var styles = ['components/sass/style.scss'];
gulp.task('first', function(){
	console.log('the first one');
});

gulp.task('js', function(){
	return gulp.src(scripts) // which file to change
		.pipe(concat('script.js')) // modules or plugin
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js')) // destination where you want to put your file
		//.on('error', gutil.log)
}); 

gulp.task('sass', function(){
	return gulp.src(styles)
		.pipe(sass(
			{	sourceComments: 'map',
				outputStyle: 'expanded'
			}).on('error', gutil.log))
		.pipe(gulp.dest('builds/development/css'))

});


gulp.task('default', ['js', 'sass']);
