import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {
    {/* o nome props poderia ser outro, mas é comumum usar props*/}

     const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            {/*para indicar que quer imprimir o valor da variavel é preciso estar entre {}, se não entendera que é uma variavel normal  */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}
export default CampoTexto 