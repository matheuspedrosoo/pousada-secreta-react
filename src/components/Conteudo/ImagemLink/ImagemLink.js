import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

export default function ImagemLink(props) {
  return (
    <div className="imgLink">
      <NavHashLink to="/quartos">
        <img
          src={props.imagem}
          alt={props.descricao}
          scroll={el => el.scrollIntoView({ block: 'center' })}
          id={props.id}
        />
      </NavHashLink>
      <p>{props.descricao}</p>
      <div className="linha"></div>
    </div>
  )
}
