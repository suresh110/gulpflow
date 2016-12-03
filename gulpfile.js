var gulp		= require('gulp'),
		gutil		= require('gulp-util'),
		concat	=	require('gulp-concat'); // for combining file


var scripts = [
	'components/scripts/five.js',
	'components/scripts/third.js',
	'components/scripts/first.js',
]; // used array for the index order

gulp.task('first', function(){
	console.log('the first one');
});

gulp.task('concat', function(){
	return gulp.src(scripts) // which file to change
		.pipe(concat('script.js')) // modules or plugin
		.pipe(gulp.dest('builds/development/js')) // destination where you want to put your file
		//.on('error', gutil.log)
});