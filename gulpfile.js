const { task, series, parallel, src, dest, watch } = require("gulp");

const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')

const csscomb = require("gulp-csscomb");
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const pug = require('gulp-pug')

const plugins = [
  cssnano({ preset: "default" }),
  autoprefixer({
    browsers: ["last 5 versions", "> 1%"],
    cascade: true,
  }),
  mqpacker({
    sort: true,
  })
];

const PLUGINS = [
  autoprefixer({ overrideBrowserslist: ['last 5 versions', '> 1%'], cascade: true }),
  mqpacker({ sort: true })
]



function comb() {
  return src("./assets/scss/**/*.scss")
    .pipe(csscomb('./.csscomb.json'))
    .pipe(dest('./assets/scss'))
}

function scss() {
  return src("./assets/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(PLUGINS))
    .pipe(dest("./assets/css"))
    .pipe(browserSync.stream());
}

function scssMin() {
  const pluginsExtended = PLUGINS.concat([cssnano({ preset: "default" })]);
  return src("./assets/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./assets/css"))
}

function syncInit() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
}

function scssDev() {
  return src("./assets/scss/style.scss", { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./assets/css', { sourcemaps: true }))
    .pipe(browserSync.reload({ stream: true }));
}

function compilePug() {
  return src(PATH.pugRootFile)
    .pipe(pug({ pretty: true }))
    .pipe(dest(PATH.pugFolder))
}

async function sync() {
  await browserSync.reload();
}

function watchFiles() {
  syncInit();
  watch('./assets/scss/**/*.scss', scss)
  watch('./*.html', sync)
  watch('./assets/js/**/*.js', sync)
}

async function myTask() {
  console.log('mytask works')
}

task('min', scssMin)
task("scss", scss);
task("watch", watchFiles);
task('mytask', myTask);
task('comb', comb)
