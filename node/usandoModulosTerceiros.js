const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000)


// instalamos el nodemon
// cd node // para entrar a esta pasta
// nodemon nombreDelArchivo.js // en el caso use // nodemon usandoModulosTerceiros.js
// y se ejecutara el codigo en tiempo real teniend en cuenta los cambios
// acordarse de salvar para que reconosca el cambio