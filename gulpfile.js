const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');
const gulpMedia = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const jsSRC = 'bundle.js';
const jsFolder = 'app/js/modules/';
const jsDIST = 'app/js/';
const jsFILES = [jsSRC];

gulp.task('sass', function (done) {
    gulp.src('app/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            cascade: false
        }))
        .pipe(gulpMedia())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('js', function (done) {
    jsFILES.map(function (entry) {
        return browserify({
            entries: [jsFolder + entry]
        })
            .transform(babelify, {
                presets: ['@babel/env']
            })
            .bundle()
            .pipe(source(entry))
            .pipe(rename({
                extname: '.min.js'
            }))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(jsDIST))
            .pipe(browserSync.stream());
    });
    done();
});

gulp.task('styleLint', function () {
    gulp.src('app/scss/**/*.scss')
        .pipe(gulpStylelint({
            reportes: [{
                formatter: 'string',
                console: true
            }]
        }));
});

gulp.task('export', (done) => {
    del.sync('dist');
    done();
    gulp.src('app/**/*.html').pipe(gulp.dest('dist'));
    gulp.src('app/css/**/*.css').pipe(gulp.dest('dist/css'));
    gulp.src('app/js/*.*').pipe(gulp.dest('dist/js'));
    gulp.src('app/img/**/*.*').pipe(gulp.dest('dist/img'));
    gulp.src('app/pdf/**/*.*').pipe(gulp.dest('dist/pdf'));
    gulp.src('app/*.ico').pipe(gulp.dest('dist'));
    done();
});

gulp.task('serve', function (done) {
    browserSync.init({
        server: './app/'
    });
    gulp.watch('app/scss/**/*.scss', gulp.series('styleLint'));
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('app/js/modules/**/*.js', gulp.series('js'));
    gulp.watch('app/*.html').on('change', () => {
        browserSync.reload();
        done();
    });
    done();
});

gulp.task('build', gulp.series('export'));

gulp.task('default', gulp.series('sass', 'js', 'serve'));
