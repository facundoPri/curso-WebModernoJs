const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    return gulp.src(['node_modules/font-awesome/css/font-awesome.css']) //font-awesome.min.css// este ya esta minificadp asi que o no se usa el uglyfy no no se usa la vercion mini
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})

// ya copiamos todas las depencencias de css y fuentes