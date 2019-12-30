// props es una convencion pero puedo pasar cualquier cosa como parametro
// react.fragment se usa para no tener que envolver nuestras etiquetas en una div obligatoriamente
// si importamos fragment adentro de nuestro archivo podemos poner directamnte fragment en vez de react.fragment
// otra cosa que podes hacer es envolverlo en un array pero para que el sistema sea eficiente para encontrar los elementos en necesario ponerle n key
import React /*, {Fragment}*/ from 'react'

export default props => [
<h1 key='h1' >Bom Dia {props.nome} de {props.idade} anos !!</h1>,
<h2 key='h2'>Ate Breve!</h2>
]

// export default props =>
// <div>
//     <h1>Bom Dia {props.nome} de {props.idade} anos !!</h1>     
//     <h2>Ate Breve!</h2>
// </div>

// export default props =>
// <Fragment>
//     <h1>Bom Dia {props.nome} de {props.idade} anos !!</h1>     
//     <h2>Ate Breve!</h2>
// </Fragment>
