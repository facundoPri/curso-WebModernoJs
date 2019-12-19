function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado con '+ nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)
// en el ejemplo de arriba el codigo se ejecutara las dos veces que lo llamamemos pero mi conficion para que aparesca un mensaje via console es que el argumento que le pasemos sea un nuemro mayor a 7
// solo se ejecutara lo que esta adetro del if si lo que esta entre () sea verdader

function seForVerdadeEuFalo(valor) {
    if(valor) { // if es lo mismo que una condicion que lo unico que me pide es que le pase algo verdadero para seguir adelante
        console.log('E verdade... '+ valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
//todos estos paremetros son falsos asi que no ocurre nada

seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
