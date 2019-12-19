const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{ // me pide como parametros, primero el directorio y el nombre del archivo que queremos crear, segundo el contenido( en el caso u objeto trasformado a json), y por ultimo una callback para cualquier posible error causado en el proceso
    console.log(err || 'Archivo Salvo') // si da un erro eso significa que err sera true y me lo mostrara, en el caso que todo salga bien err sera falso y se mostrara archivo salvo
})

