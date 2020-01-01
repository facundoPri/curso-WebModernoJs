import React, {Fragment} from 'react'
// no es necesario que sea props pero como viene de propiedad se usa como convencion
export default props => 
<Fragment>
<h1>Bom Dia {props.nome} !!</h1>
<h2>Ate breve!</h2>
</Fragment>

{/* <div>
<h1>Bom Dia {props.nome} !!</h1>
<h2>Ate breve!</h2>
</div>

<React.Fragment>
<h1>Bom Dia {props.nome} !!</h1>
<h2>Ate breve!</h2>
</React.Fragment>

[
<h1 key='h1'>Bom Dia {props.nome} !!</h1>
<h2 key='h2'>Ate breve!</h2>
] */}
