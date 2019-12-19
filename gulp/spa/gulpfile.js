const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence') // descomentar en caso de algun error//alternativa para gulp.start//esto ayuda a que se ejecute todo de forma serial// como necesito que deps se cargue antes que mi app es sumamente importante// ya que podria pasar de que por algun acaso en el servidor se cargue antes app en ves de las deps y no se muestre como quiero o ne que funcione correctamente

require('./gulpTasks/app') // asi podemos importar una task de otro archivo, en el caso la task app y sus dependencias
require('./gulpTasks/deps') // deps  dependencias
require('./gulpTasks/servidor')// servidor y dependencias

gulp.task('default', () => {
    if (util.env.production) { //gulp --production// algo interesante pasa hacer es ponerlo como comando en npm, en el caso (npm run build)//se ejecutara las task y dependencias, deps y app apenas si usamos una flag llamada production 
        sequence('deps', 'app')
        // gulp.start('deps', 'app')

    } else {
        sequence('deps','app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})