import React from 'react'
import './Footer.css'

import end from '../../assets/icones/endereco.png'
import tel from '../../assets/icones/telefone.png'
import cal from '../../assets/icones/calendario.png'

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="bloco-footer">
        <h2>Entre em contato conosco: </h2>
      </div>

      <div className="bloco-footer">
        <img src={end} alt="endereço" />
        <a
          className="link-footer"
          href="https://www.google.com/maps?ll=-22.982691,-43.364191&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6024884406377833357"
          target="_blank"
          rel="noreferrer"
        >
          Endereço Av.123,222 - Rio de Janeiro RJ
        </a>
      </div>

      <div className="bloco-footer">
        <img src={tel} alt="telefone" />
        <p>Cel: 5521000000000</p>
      </div>

      <div className="bloco-footer">
        <img src={cal} alt="calendario" />
        <a
          className="link-footer"
          href="https://www.booking.com/"
          target="_blank"
          rel="noreferrer"
        >
          Faça sua reserva pelo Booking.com
        </a>
      </div>
      <div className="linha-footer"></div>
      <div className="footer-copy">
        <p> © Copyright - PousadaDev</p>
      </div>
    </div>
  )
}

export default Footer
