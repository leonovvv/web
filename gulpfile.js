const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
const combineMq = require("gulp-combine-mq");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

gulp.task("clean", function() {
  return del(["dest/"]);
});

gulp.task("sass", function() {
  return gulp
    .src("./src/sass/**/*.sass")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dest/css"));
});

gulp.task("combineMq", function() {
  return gulp
    .src("./dest/css/*.css")
    .pipe(
      combineMq({
        beautify: false
      })
    )
    .pipe(gulp.dest("./dest/css/"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./src/sass/**/*.sass", gulp.series("sass"));
});
