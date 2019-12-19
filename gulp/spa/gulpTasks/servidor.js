const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', ()=> gulp.start('app.html'))// el watch va a monitorear que si hay algun cambion en alguno de los archivos que ponermos como parametro se ejecutara una funcion que reconstruira este archivo
    watch('src/**/*.scss', ()=> gulp.start('app.css'))
    watch('src/**/*.js', ()=> gulp.start('app.js'))
    watch('src/assets/img/**/*.*', ()=> gulp.start('app.imgs'))


})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webserver({// por ulimo creamos servidor con los arcivos de la carpeta build
        livereload: true,
        port: 8080,
        open: true
    }))
})