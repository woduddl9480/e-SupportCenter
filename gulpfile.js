// const browserSync = require('browser-sync');
var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  include = require("gulp-file-include"),
  concat = require("gulp-concat");
var sass = require("gulp-sass")(require("sass"));
const autoprefixer = require('gulp-autoprefixer');
var src = "./asset/"; // 개발용
var dist = "./asset/"; // 배포용
var paths = {
  src: {
    html: "./html/**",
    scss: "./scss/**",
    js: "./js/**",
  },
  dist: {
    css: "./dist/WELFARE_REPO/markup/css/",
    js: "./dist/WELFARE_REPO/markup/js/",
    html: "./dist/WELFARE_REPO/markup",
  },
};

// html-include
gulp.task("include", function () {
  console.log(paths.dist.html);
  return gulp
    .src([
      paths.src.html, // 불러올 파일의 위치
      "!./include/*.html", // 읽지 않고 패스할 파일의 위치
    ])
    .pipe(
      include({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(paths.dist.html)); // 변환한 파일의 저장 위치 지정
});

/* 
html-include 사용법
    html파일에 include
    @@include('../include/header.html')
*/

gulp.task("gulp_css", function () {
  // return browserSync.reload({ stream : true });
  return (
    gulp
      .src([paths.src.scss, "!./scss/import/**"])
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer({
        cascade: false
      }))
      // .pipe(minificss())
      .pipe(gulp.dest([paths.dist.css]))
      .pipe(browserSync.reload({ stream: true }))
  );
});

// gulp.task("autoprefixer_css", function () {
//   // return browserSync.reload({ stream : true });
//   return (
//     gulp
//       .src(['./dist/WELFARE_REPO/markup/css/**.css'])
//       .pipe(autoprefixer({
//         cascade: false
//       }))
//       .pipe(gulp.dest([paths.dist.css]))
//   );
// });

gulp.task("gulp_js", function () {
  return (
    gulp
      .src([paths.src.js, "!./js/include/**"])
      // .pipe( concat('common.js') )
      .pipe(gulp.dest(paths.dist.js))
      .pipe(browserSync.reload({ stream: true }))
  );
});

// browser-sync
gulp.task("browserSync", function () {
  return browserSync.init({ port: 5000, server: { baseDir: "./dist/WELFARE_REPO/markup" } });
});

// gulp.watch(['html/**', 'js/**', 'scss/**', 'include/**'],
//   function () {
//     browserSync.reload();
//   });

gulp.task("watch", function () {
  gulp
    .watch(paths.src.html, gulp.series("include"))
    .on("change", browserSync.reload);
  gulp
    .watch('include/**', gulp.series("include"))
    .on("change", browserSync.reload);
  gulp
    .watch("./scss/**", gulp.series("gulp_css"))
    .on("change", browserSync.reload);
  gulp
    .watch("./js/**", gulp.series("gulp_js"))
    .on("change", browserSync.reload);
});

gulp.task(
  "default",
  gulp.parallel("include", "gulp_css", "gulp_js", "watch", 'browserSync')
);
