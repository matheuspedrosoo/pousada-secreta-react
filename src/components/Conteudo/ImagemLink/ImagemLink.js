import React from 'react'

export default function ImagemLink(props) {
  return (
    <div className="imgLink">
      <a href="/pagina-quartos.html#quarto-solteiro">
        <img src={props.imagem} alt={props.descricao} />
      </a>
      <p>{props.descricao}</p>
      <div className="linha"></div>
    </div>
  )
}
