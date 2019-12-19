const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const eMulher = f => f.genero === 'F'
const eChinesa = f => f.pais === 'China'
const salarioMenor = (funci , funciActual) => funci.salario < funciActual.salario ? funci  : funciActual // agarra el primer funcionario (funci) y lo compara con el segundo(funciActual), el menor pasara a ser el nuevo funci hasta encontrar otro menor o terminar el cilo


axios.get(url).then(response =>{
    const funcionarios = response.data // la lista de funcionarios se encuantra adentro de response.data

    const mulheresChinesas = funcionarios.filter(eMulher).filter(eChinesa).reduce(salarioMenor)
    console.log(mulheresChinesas)

})



// desafio buscar la mujer china con el menor salario
//creo funciones para usar con un filter
