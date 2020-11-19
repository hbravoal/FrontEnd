const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


const css=  () => {
    return gulp 
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 2 versions'], // Actualiza las ultimas 2 versiones
            cascade:false
        }))
        .pipe(sass({
            outputStyle : 'expanded', //nested,compact , compreseed (Comprimir css)
        }))
        .pipe(gulp.dest('css')) //Se almacenará en la carpeta css
}

const watchFiles = () => {
    gulp.watch('scss/*.scss',css); // Carpeta/Archivos que estará es cuchando y la función con la que se ejecutarán.
    gulp.watch('index.html');
}

//Registrar funciones como tareas

gulp.task('css',css); // La función se llama Css y ejecuta la funcioón css
//Para correrlo: npx  gulp css
gulp.task('watch',watchFiles); //npx gulp watch