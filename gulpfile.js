const	gulp = require("gulp"),
		sass = require("gulp-sass"),
		pug = require("gulp-pug")
		autoprefixer = require("gulp-autoprefixer"),
		plumber = require("gulp-plumber"),
		browserSync = require("browser-sync").create(),
		reload = browserSync.reload;


gulp.task("server", function(){
	browserSync.init({
		server: "./dist"
	})
});

gulp.task('reload-browser', function () {
	browserSync.reload();
});


gulp.task("sass", function(){
	return gulp.src("src/css/style.scss")
	.pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions', 'IE 9']
	}))
	.pipe(gulp.dest("dist/css/"));
});

gulp.task('pug', function buildHTML() {
	return gulp.src('src/*.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest("dist/"));

});

gulp.task("img", function(){
	return gulp.src("src/img/**/*")
	.pipe(gulp.dest("dist/img/"));
});

gulp.task("js", function(){
	return gulp.src("src/js/**/*")
	.pipe(gulp.dest("dist/js/"));
});

gulp.task("watch", function(){
	gulp.watch("src/css/**/*.scss", ["sass"]);
	gulp.watch("src/*.pug", ["pug"]);
	gulp.watch("src/pug/**/*.pug", ["pug"]);
	gulp.watch("src/img/**/*", ["img"]);
	gulp.watch("src/js/**/*.js", ["js"]);
	gulp.watch("dist/**/*", ["reload-browser"]);
});


gulp.task('default', ['server','sass','pug', 'img', 'js', 'watch']);
