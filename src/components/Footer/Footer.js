import React from 'react'
import BlocoFooter from '../Footer/BlocoFooter/BlocoFooter'
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-footer">
      <BlocoFooter contato="Entre em contato conosco: " />
      <BlocoFooter
        imagem="/img/icones/endereco.png"
        link="https://www.google.com/maps?ll=-22.982691,-43.364191&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6024884406377833357"
        descricao="Endereço Av.123,222 - Rio de Janeiro RJ"
      />

      <BlocoFooter
        imagem="/img/icones/telefone.png"
        descricao="Cel: 5521000000000"
      />

      <BlocoFooter
        imagem="/img/icones/calendario.png"
        descricao=" Faça sua reserva pelo Booking.com"
        link="https://www.booking.com/"
      />

      <div className="footer-copy">
        <p> © Copyright - PousadaDev</p>
      </div>
    </div>
  )
}

export default Footer
