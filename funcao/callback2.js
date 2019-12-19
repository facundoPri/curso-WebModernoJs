const notas = [7.7, 6.5, 5.2, 8.9, 3.5, 7.1, 9.1]

// Sin el uso de callback
const notasBaixas1 = [] // creo un array para almacenar las notas bajas que quiero extrer de mi array original
for(let i in notas) {
    if (notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// usando callback
const notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)