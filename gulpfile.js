(function(){
	var gulp = require('gulp'),
		cleanCSS = require('gulp-clean-css'),
	　　//minifycss = require('gulp-minify-css'),
	    concat = require('gulp-concat'),
	    uglify = require('gulp-uglify'),
	    rename = require('gulp-rename'),
	    jshint = require('gulp-jshint'),
	    browserSync = require('browser-sync'),
	    imagemin = require('gulp-imagemin');

	var reload = browserSync.reload;

	gulp.task('serve',function(){
		browserSync({
			server: {
	          //指定根目录
	          baseDir: './',
	          //指定index路径
	          //index:'dist/pages/watcher.html'
	        }
		})
	});
	gulp.watch(['*.html', 'static/**/*.css', 'static/**/*.js'], {cwd: 'public'}, reload);
})()