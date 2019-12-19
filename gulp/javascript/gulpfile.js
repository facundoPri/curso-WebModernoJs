const gulp = require('gulp')
const conscat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default',()=>{
    return gulp.src('src/**/*.js')
        .pipe(babel({ // es muy usado para hacer codigo mas compatible con browser que pueden llegar a ser mas antiguos
            minified:true, // comportamiendo parecido al uglify()
            comments: false,
            presets: ['env'] // lo que hace es automaticamente identificar lo que hay que modificar dependiendo del ambiente
        }))
        // .pipe(uglify()) //uglify no soporta las nuevas verciones de js asi que si no usamos el babel me dara un erro que gracias al .on('error') queda mas facil de identificar //compactador de codigo, lo hace mas feo e medio ilegible pero al mismo tiempo mas rapido
        .on('error', err => console.log(err)) // es una forma de hacer con que cualquier error que ocurra me lo pase por el console.log()
        .pipe(conscat('codigo.min.js'))// esto me va a concatenar varios arcivos y me lo va a transformar en uno solo, con el nombre que pasamos// normalmente se usa el .min para dicir que el codigo ya fue minificado, compactado// foorma de optimizarlo para el browzer
        .pipe(gulp.dest('bulld'))// lo pasamos a esta pasta
})