import React from 'react'
import TituloDescricao from '../TituloDescricao/TituloDescricao'
import ImagemLink from '../ImagemLink/ImagemLink'
import Lista from './Lista/Lista'

import './ConteudoQuartos.css'

const ConteudoQuartos = () => {
  return (
    <>
      <div className="container-imagem"></div>

      <div className="div-titulo" id="quarto-solteiro">
        <TituloDescricao
          titulo="quartos de solteiro"
          descricao="Conheça os nossos quartos de solteiro."
        />
      </div>

      <div className="main">
        <div className="container-imagens">
          <ImagemLink imagem="/img/quarto-solteiro2.jpg" />
          <ImagemLink imagem="/img/quarto-solteiro1.jpg" />
          <ImagemLink imagem="/img/quarto-solteiro3.jpg" />
        </div>

        <Lista
          info="Informações sobre o quarto:"
          info1="Tv de tela plana a cabo."
          info2="Cozinha compacta."
          info3="Área para refeições."
          info4="Ar-condicionado."
          info5="1 ou 2 camas de solteiro."
          info6="Não permite cancelamento."
        />

        <div className="div-titulo" id="quarto-casal">
          <TituloDescricao
            titulo="quarto de casal"
            descricao="Conheça os nossos quartos de casal."
          />
        </div>

        <div className="container-imagens">
          <ImagemLink imagem="/img/quarto-casal1.jpg" />
          <ImagemLink imagem="/img/quarto-casal2.jpg" />
          <ImagemLink imagem="/img/quarto-casal3.jpg" />
        </div>

        <Lista
          info="Informações sobre o quarto:"
          info1="Tv de tela plana a cabo."
          info2="Cozinha compacta."
          info3="Área para refeições."
          info4="Ar-condicionado."
          info5="1 cama de casal."
          info6="Cancelamento grátis."
        />

        <div className="div-titulo" id="quarto-familia">
          <TituloDescricao
            titulo="quarto família"
            descricao="Conheça os nossos quartos família."
          />
        </div>

        <div className="container-imagens">
          <ImagemLink imagem="/img/quarto-familia2.jpg" />
          <ImagemLink imagem="/img/quarto-familia1.jpg" />
          <ImagemLink imagem="/img/quarto-familia3.jpg" />
        </div>

        <Lista
          info="Informações sobre o quarto:"
          info1="Tv de tela plana a cabo."
          info2="Cozinha compacta."
          info3="Área para refeições."
          info4="Ar-condicionado."
          info5="1 cama de casal e 1 de solteiro."
          info6="Cancelamento grátis."
        />
      </div>
    </>
  )
}

export default ConteudoQuartos
