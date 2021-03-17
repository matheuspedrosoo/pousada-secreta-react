import React from 'react'

export default function BlocoFooter(props) {
  return (
    <div className="bloco-footer">
      <h2>{props.contato}</h2>
      <img src={props.imagem} alt={props.descricao} />
      <a
        className="link-footer"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        {props.descricao}
      </a>
    </div>
  )
}
