import React from 'react'

export default function Pousada(props) {
  return (
    <div className="div-apousada-secundaria">
      <div className="texto">
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>
      <img src={props.imagem} alt={props.titulo} />
    </div>
  )
}
