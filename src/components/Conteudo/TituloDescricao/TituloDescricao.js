import React from 'react'

export default function TituloDescricao(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
      <p>{props.descricao2}</p>
    </div>
  )
}
