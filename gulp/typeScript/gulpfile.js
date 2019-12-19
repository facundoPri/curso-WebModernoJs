const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', ()=>{
    return tsProject.src()
        .pipe(tsProject()) // esto compila mi typescript a javascript
        .pipe(gulp.dest('build'))
})

//node build/app.js // esta es mi version js y asi se ejecuta