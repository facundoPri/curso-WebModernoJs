let contador = 1
//vamos a crear una estructura while determinada
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 1; i < 10; i++) {
    console.log(`i = ${i}`);
}
// cumple la misma funcion que el while de arriva pero ya te da un formato mas facil para ejecutar lo mismo

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}// esta es una forma facil de percorrer un array con el for
