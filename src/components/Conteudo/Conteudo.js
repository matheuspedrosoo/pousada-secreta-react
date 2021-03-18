import React from 'react'
import ImagemLink from './ImagemLink/ImagemLink'
import Pousada from './Pousada/Pousada'
import TituloDescricao from './TituloDescricao/TituloDescricao'
import { NavHashLink } from 'react-router-hash-link'

import './Conteudo.css'

const Conteudo = () => {
  return (
    <>
      <div className="container-conteudo" id="inicio">
        <div className="div-pousada-secreta">
          <TituloDescricao
            titulo="Pousada Secreta"
            descricao="A pousada reservada em Angra dos Reis"
          />
        </div>
      </div>

      <div className="div-titulo" id="quartos">
        <TituloDescricao
          titulo="seja bem-vindo(a)!"
          descricao="Relaxe em nossas acomodações e curta o melhor de Angra dos Reis."
          descricao2="Temos quartos para solteiro, casal ou familia."
        />
      </div>

      <div className="div-quartos-container">
        <NavHashLink
          className="NavHashLink"
          to="/quartos#quarto-solteiro"
          scroll={el => el.scrollIntoView({ block: 'center' })}
        >
          <ImagemLink
            imagem="/img/quarto-solteiro1.jpg"
            descricao="quarto de solteiro"
          />
        </NavHashLink>

        <NavHashLink
          className="NavHashLink"
          to="/quartos#quarto-casal"
          scroll={el => el.scrollIntoView({ block: 'center' })}
        >
          <ImagemLink
            descricao="quarto de casal"
            imagem="/img/quarto-casal1.jpg"
          />
        </NavHashLink>

        <NavHashLink
          className="NavHashLink"
          to="/quartos#quarto-familia"
          scroll={el => el.scrollIntoView({ block: 'center' })}
        >
          <ImagemLink
            descricao="quarto família"
            imagem="/img/quarto-familia1.jpg"
          />
        </NavHashLink>
      </div>

      <div id="rota" className="div-titulo">
        <TituloDescricao
          titulo="rota"
          descricao="Veja como chegar até a pousada."
        />
      </div>

      <div className="mapa">
        <iframe
          title="localização"
          target="_blank"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1151082770225!2d-43.364909935018204!3d-22.982794295648983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1614311580249!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>

      <div id="sobre" className="div-titulo">
        <TituloDescricao
          titulo="sobre a pousada!"
          descricao="Conheça um pouco sobre nossa pousada."
        />
      </div>

      <div className="div-apousada-container">
        <Pousada
          titulo="A pousada"
          descricao=" A pousada Dev dispõe de estacionamento privativo gratuito, pscina ao ar livre e bar."
          imagem="/img/img1.jpg"
        />
        <Pousada
          titulo="Nosso quartos"
          descricao=" Os quartos possuem TV de tela plana a cabo, cozinha compacta e
          área para refeições. Além disso, as unidades da Pousada Dev contam
          com ar condicionado e guarda-roupa."
          imagem="/img/img2.jpg"
        />
        <Pousada
          titulo="Alimentação"
          descricao="A pousada serve café da manhã em estilo continental ou buffet.
          nossos restaurantes funcionam 24hrs."
          imagem="/img/img3.jpg"
        />
        <Pousada
          titulo="Recepção"
          descricao="Nossa recepção fica aberta 24hrs."
          imagem="/img/img5.jpg"
        />
      </div>
    </>
  )
}
export default Conteudo
