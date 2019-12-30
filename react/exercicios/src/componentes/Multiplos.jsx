// en este caso no le puse export defaul y por eso hay que ponerle nombre a los componente que creamos, en el caso cree dos componente uno llamado BoaTarde y otro BoaNoite

import React from 'react'

const BoaTarde = props => <h1>Boa Tarde {props.nome}!!</h1>

const BoaNoite = props => <h1>Boa Noite {props.nome}!!</h1>

export {BoaTarde, BoaNoite }  // cualquiera de las dos sirven// no esta exportamos los componentes directamente y despues vamos a tener que llamarlos por individual
export default {BoaTarde, BoaNoite } // en este caso estamos creando un objeto con los componentes// estamos haciendo con que el archivo de alguna forma sea como una funcion y devuelva estos dos componente por padron