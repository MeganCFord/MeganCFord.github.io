const gulp = require("gulp");

const sass = require("gulp-sass");

const watch = require("gulp-watch");

const del = require("del");


gulp.task("clean", () => (
  del("css/**/*.css")
));

//sass compiler. 
gulp.task("sass:compile", () => { 
  gulp.src("./scss/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

gulp.task("sass:watch", () => {
  gulp.watch("style.scss", ["clean", "sass:compile"]);
});

gulp.task("sass:start",["clean", "sass:compile", "sass:watch"]);
