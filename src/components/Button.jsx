import React from 'react'
import './Button.css'

export default props => {
    /*Se as propriedada operation/double/triple forem passadas, adicione as classes, ou então coloque vazio*/
    let classes = 'button '
    classes+= props.operation ? 'operation' : ''
    classes+= props.double ? 'double' : ''
    classes+= props.triple ? 'triple' : ''
    return(
        <button
            /*Espero receber nas propriedades do meu botão*/
            onClick={e => props.click && props.click(props.label)} 
            className={classes}>
            {props.label}
        </button>
    )
}
