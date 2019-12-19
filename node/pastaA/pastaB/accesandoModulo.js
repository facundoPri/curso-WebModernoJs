const moduloA = require('../../moduloA') // prestar atencion el las letras mayusculas y minusculas por que el linux esto hace diferrencia
//copy path es otra forma de copiar el archivo // /home/facundo/Documentos/cursoJavaScriptUdemy/node/moduloA.js
console.log(moduloA.ola)

const saudacao = require('saudacao') // podemos ver que ya que esta adentro de la pasta node_module, podemos acceder a su index de una forma mas simple
console.log(saudacao.ola)

const c = require('./pastaC') // cuando no pongo nada despues de la pasta ira a buscar al index para llamar lo que esta adentro// de este modo index es un buen lugar para juntar todas las cosa que queremos exportar
console.log(c.ola2)

const http = require('http')
http.createServer((req, res)=>{
    res.write('Bom Dia!')
    res.end()
}).listen(8080)