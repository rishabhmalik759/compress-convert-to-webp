const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');

//Taking arguments for input and output file
const arg = ((argList) => {
  let arg = {};
  arg.input = argList[3];
  arg.output = argList[5];
  return arg;
})(process.argv);

//Compressing and converting to webp
gulp.task('default', function () {
  console.log('argument is ', arg.input, arg.output);

  const stream = gulp
    .src(`${arg.input}/*.{jpg,png}`)
    .pipe(
      imagemin({
        verbose: true,
        plugins: webp({ quality: 10 }),
      })
    )
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest(`${arg.output}/`));
  return stream;
});
