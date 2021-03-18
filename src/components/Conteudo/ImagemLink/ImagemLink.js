import React from 'react'

export default function ImagemLink(props) {
  return (
    <div className="imgLink">
      <img src={props.imagem} alt={props.descricao} id={props.id} />
      <p>{props.descricao}</p>
    </div>
  )
}
