var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var bowerOptions = {
  json: require('./bower.json'),
  directory: './www/lib/',
  ignorePath: '../..',
  exclude: [
    'www/lib/angular/angular.js',
    'www/lib/angular-animate/angular-animate.js',
    'www/lib/angular-sanitize/angular-sanitize.js',
    'www/lib/angular-ui-router',
    'www/lib/ionic',
    'www/lib/jquery'
  ],
  overrides: {'tinymce-dist': {'main': ['tinymce.js', 'plugins/**/*.js', 'themes/**/*.js', 'skins/**/*.css']}}
};

var paths = {
  sass: ['./scss/**/*.scss'],
  javascript: [
    './www/**/*.js',
    '!./www/lib/**',
  ],
  css: [
    './www/**/*.css',
    './www/css/ionic.app.css',
    '!./www/lib/**',
    '!./www/css/ionic.app.min.css'
  ]
};

gulp.task('default', ['sass']);

gulp.task('serve:before', ['default', 'watch', 'index']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch([
    paths.javascript,
    paths.css
  ], ['index']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('index', function(){
  return gulp.src('./www/index.html')
    .pipe(inject(
      gulp.src(paths.javascript,
        {read: false}), {relative: true}))
    .pipe(gulp.dest('./www'))
    .pipe(inject(
      gulp.src(paths.css,
        {read: false}), {relative: true}))
    .pipe(gulp.dest('./www'));
});

gulp.task('wiredep', [], function() {
  //console.log('Wiring the bower dependencies into the html');

  return gulp
    .src('./www/index.html')
    .pipe(wiredep({
      bowerJson: bowerOptions.json,
      directory: bowerOptions.directory,
      ignorePath: bowerOptions.ignorePath,
      exclude: bowerOptions.exclude,
      overrides: bowerOptions.overrides
    }))
    .pipe(gulp.dest('./www'));
});
