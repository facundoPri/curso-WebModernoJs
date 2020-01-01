import React from 'react'
import ReactDOM from 'react-dom'


import Pai from './componetes/Pai'
import Filho from './componetes/Filho'

// import Saudacao from './componetes/Saudacao'
// import Multi, { BoaNoite } from './componetes/Multiplos'
// import BomDia from './componetes/BomDia'
// import Primeiro from './componetes/Primeiro'
// const elemento = <h1>React 2 </h1>

ReactDOM.render(
<div>
    <Pai nome='Paulo' sobrenome='Silva'>
    <Filho nome="Pedro"/>
    <Filho nome="Paulo"/>
    <Filho nome="Carla"/>
    </Pai>
</div>    
, document.getElementById('root'))
