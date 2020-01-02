import React, {Fragment} from 'react'
import {Link} from "react-router-dom"

export default props => 
    <Fragment>
  <Link to={props.hash}>
    <i className={`fa fa-${props.icon}`}></i> {props.name}
  </Link>
    </Fragment>

