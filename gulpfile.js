var gulp         = require('gulp'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');




//Compiled css
function css_libs() {
	return gulp.src(['assets/css/**/*'])
		.pipe(cssnano())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("assets/css/"))
}

function scripts() {
	return gulp.src([
		'assets/libs/jquery-3.3.1/jquery-3.3.1.min.js'
	])
		.pipe(concat('libs.min.js')) 
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
}

function clean() {
	return del('dist');
}

function buildCss() {
	return  gulp.src([
		"assets/css/**/*.min.css"
	])
		.pipe(gulp.dest('dist/assets/css'));
}

function cssIn() {
	return gulp.src([
		'dist/assets/css/normalize.min.css', 'dist/assets/css/fonts.min.css','dist/assets/css/main.min.css','dist/assets/css/footer.min.css', 'dist/assets/css/swiper.min.css'
	])
		.pipe(concat('libs.min.css'))
		.pipe(gulp.dest('dist/assets/css'));

}

function buildFonts() {
	return gulp.src('assets/fonts/**/*')
		.pipe(gulp.dest('dist/assets/fonts'));
}

function buildJs() {
    return gulp.src('assets/js/**/*')
        .pipe(gulp.dest('dist/assets/js'));
}

function buildHtml() {
    return gulp.src('assets/*.html')
        .pipe(gulp.dest('dist/assets/'));
}

function buildImg() {
	return gulp.src('assets/img/**/*')
		.pipe(gulp.dest('dist/assets/img'));
}

const build = gulp.parallel(scripts,buildCss, buildFonts,buildJs,buildHtml,buildImg);


function prefix() {
	return gulp.src("assets/css/**/*.css")
		.pipe(autoprefixer({browsers: ['> 1%', 'last 5 versions', 'firefox >= 4', 'iOS 7',  'ie 8']}))
		.pipe(gulp.dest("assets/css"));
}


exports.build = build;
exports.clean = clean;
exports.scripts = scripts;
exports.css_libs = css_libs;
exports.buildCss = buildCss;
exports.buildFonts = buildFonts;
exports.buildJs = buildJs;
exports.buildHtml = buildHtml;
exports.buildImg = buildImg;
exports.prefix = prefix;
exports.cssIn = cssIn;


