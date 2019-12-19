const gulp = require('gulp')

gulp.task('default', ()=>{ // cuando se ejecuta el comando gulp se ejecuta el comando default que contiene enseguida una funcio
    gulp.start('copiar', 'fim')// primero se ejecuta copiar sus dependencias y despues fim//copiar y fin son otras taskes que seran ejecutadas al usar el comando gulp
})

gulp.task('copiar', ['antes1', 'antes2'], ()=>{ // cuando se llame la task compiar antes se se ejecutaran primero el array de dependecias y despues la funcion
    // return gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt']) // forma de seleccionar los arquivos que vamos a querer trabajar
    // return gulp.src('pastaA/*.txt')// de esta forma agarro todos los archivos// habiendo apenas un archivo no es necesarion poner lo []
    return gulp.src('pastaA/**/*.txt') // y de esta forma agarra todos los archivos directos y los que estan en sub pastas
    // .pipe(trasnformacao1()) // los pipe son como filtos que vas usando para modificar algun arquivo
        // .pipe(trasnformacao2())
        .pipe(gulp.dest('pastaB')) // si la pasta no existe este me la creara//.dest es una forma de redireccionar algo
})

gulp.task('antes1',()=>{ // es llamado como pre-reqisito
    console.log('Antes 1 !!!')
})

gulp.task('antes2',()=>{ // junto con esta
    console.log('Antes 2!!!')
})

gulp.task('fim',['fim1','fim2']) // esta es una forma de ejecutar varias task// una forma de llamar muchas task con apenas una

gulp.task('fim1',()=>{
    console.log('FIM1!!!')
})
gulp.task('fim2',()=>{
    console.log('FIM2!!!')
})