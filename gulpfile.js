const gulp =  require('gulp');
const sass =  require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss') // de onde vai pegar
       .pipe(sass({ outputStyle: 'compressed'}))  // Para comprimir arquivos
       .pipe(gulp.dest('./dist/css'));  // Para onde enviar  compilados
}
exports.default = styles;
exports.watch = function(){
    gulp.watch( './src/styles/*.scss', gulp.parallel(styles))
}