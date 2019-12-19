const fs = require('fs') //filesistem module

const caminho = __dirname + '/arquivo.json' // dirname es el directorio (actual) donde este este archivo, y despues lo seguimos de que realmente queremos leer

// como leer un archivo de forma sincrona 
// el problema es que si el archivo es muy grande se puede trabar en alguna parte y parar el programa
//tener cuidado con el uso
// escribir, leer, mandar al servidor, todo esto requiere un tiempo de respuesta y al ser sincrono esto ara que nada se ejecute hasta que el problema se solucione

const conteudo = fs.readFileSync(caminho, 'utf-8') // hay que ponerle el camino y el cogido de encodig, asi lo puede leer correctamnte
console.log(conteudo)

// lectura assincrona
// bastante mas interesante de ser usada
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{ // en este caso le vamos a poner una funcion callback que se ejecutara apenas cuando se termine de leer el archivo// como paremtros le estoy mandano err y conteudo, de forma que si ocurre algun error en la lectura este me dira y sino tendre el contenido para hacer lo que quiera adentro de la funcion
    const config = JSON.parse(conteudo) // necesitamos que conteudo sea un objeto para poder navegarlo correctamente y hacer lo que hicimos en el console.log
    console.log(`1) ${config.db.host}:${config.db.port}`)
})

// cuando apenas tenemos un archivo json hay una manera mas facil de leerlo sin la necesidad de fs
const config = require('./arquivo.json') // como no es un archivo .js es necesarion escribir . json
// usando este metodo ya se me para el json como un objeto adentro de mi constante
console.log(`2) ${config.db.host}:${config.db.port}`) // de forma que podemos hacer esto sin necesidad de usar el JSON.parse
// otra cosa interesante es que como el metodo de arriba es assincrono se pueden dar casos como el de recien donde este segundo metodo al ser mas repido se ejecute antes

//lectura de una pasta
fs.readdir(__dirname, (err, arquivos)=>{ // esta es una forma de ver todo lo que se encuentra en una pasta, necesita del directorio y una funcion callback como parametros
    console.log('Arquivos de la pasta')
    console.log(arquivos)
})
