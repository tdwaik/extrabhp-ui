var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var mode = require('gulp-mode')({
    modes: ["prod", "dev"],
    default: "dev",
    verbose: false
});
var isProduction = mode.prod();

var banner = ['/*!\n',
    ' * Thaer Aldwaik - <%= pkg.title %> v<%= pkg.version %>\n',
    ' * Copyright ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license %>\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('less/main.less')
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('dist/css/main.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// Compiles SCSS files from /scss into /css
gulp.task('scss', function() {
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['scss'], function() {
    return gulp.src('dist/css/main.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    gulp.src(['app/*.js', 'app/**/**/**/**'])
        .pipe(uglify({dynamic: false}))
        .pipe(concat('dist/js/extrabhp.min.js'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest(''))
});
// gulp.task('minify-js', function() {
//     return gulp.app('js/main.js')
//         .pipe(uglify())
//         .pipe(header(banner, { pkg: pkg }))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest('js'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });

// Copy lib libraries from /node_modules into /lib
gulp.task('copy', function() {
    gulp.src(['node_modules/underscore/underscore-min.js'])
        .pipe(gulp.dest('dist/js/lib/underscore'));
    // gulp.app(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
    //     .pipe(gulp.dest('lib/bootstrap'));
    //
    // gulp.app(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    //     .pipe(gulp.dest('lib/jquery'));

    // gulp.app(['node_modules/simple-line-icons/*/*'])
    //     .pipe(gulp.dest('lib/simple-line-icons'));
    //
    //
    // gulp.app([
    //     'node_modules/font-awesome/**',
    //     '!node_modules/font-awesome/**/*.map',
    //     '!node_modules/font-awesome/.npmignore',
    //     '!node_modules/font-awesome/*.txt',
    //     '!node_modules/font-awesome/*.md',
    //     '!node_modules/font-awesome/*.json'
    // ])
        // .pipe(gulp.dest('lib/font-awesome'))
});

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js', 'copy']);

// Configure the browserSync task
// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: ''
//         },
//     })
// });

// Dev task with browserSync
gulp.task('dev', ['less', 'minify-css'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('dist/css/*.css', ['minify-css']);
    // gulp.watch('app/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    //gulp.watch('*.html', browserSync.reload);
    //gulp.watch('app/**/*.js', browserSync.reload);
});
