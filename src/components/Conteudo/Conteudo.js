import React from 'react'
import { Link } from 'react-router-dom'
import './Conteudo.css'

import quartoSolteiro from '../../assets/quarto-solteiro1.jpg'
import quartoCasal from '../../assets/quarto-casal1.jpg'
import quartoFamilia from '../../assets/quarto-familia1.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img5 from '../../assets/img5.jpg'

const Conteudo = () => {
  return (
    <>
      <div className="container-conteudo" id="inicio">
        <div className="div-pousada-secreta">
          <h1>Pousada Secreta</h1>
          <p>A pousada reservada em Angra dos Reis</p>
        </div>
      </div>

      <div className="div-titulo" id="quartos">
        <h1>seja bem-vindo(a)!</h1>
        <p>Relaxe em nossas acomodações e curta o melhor de Angra dos Reis.</p>
        <p>Temos quartos para solteiro, casal ou familia.</p>
      </div>

      <div class="div-quartos-container">
        <div class="imgLink">
          <a href="/pagina-quartos.html#quarto-solteiro">
            <img src={quartoSolteiro} alt="quartoSolteiro" />
          </a>
          <p>quarto de solteiro</p>
          <div class="linha"></div>
        </div>

        <div class="imgLink">
          <a href="/pagina-quartos.html#quarto-casal">
            <img src={quartoCasal} alt="quartoCasal" />
          </a>
          <p>quarto de casal</p>
          <div class="linha"></div>
        </div>

        <div class="imgLink">
          <a href="/pagina-quartos.html#quarto-familia">
            <img src={quartoFamilia} alt="quartoFamilia" />
          </a>
          <p>quarto família</p>
          <div class="linha"></div>
        </div>
      </div>

      <div id="rota" class="div-titulo">
        <h1>rota</h1>
        <p>Veja como chegar até a pousada.</p>
      </div>

      <div class="mapa">
        <iframe
          target="_blank"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1151082770225!2d-43.364909935018204!3d-22.982794295648983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1614311580249!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div id="sobre" class="div-titulo">
        <h1>sobre a pousada!</h1>
        <p>Conheça um pouco sobre nossa pousada.</p>
      </div>

      <div class="div-apousada-container">
        <div class="div-apousada-secundaria">
          <div class="texto">
            <h3>A pousada</h3>
            <p>
              A pousada Dev dispõe de estacionamento privativo gratuito, pscina
              ao ar livre e bar.
            </p>
          </div>
          <img src={img1} alt="Imagem" />
        </div>

        <div class="div-apousada-secundaria">
          <div class="texto">
            <h3>Nosso quartos</h3>
            <p>
              Os quartos possuem TV de tela plana a cabo, cozinha compacta e
              área para refeições. Além disso, as unidades da Pousada Dev contam
              com ar condicionado e guarda-roupa.
            </p>
          </div>
          <img src={img2} alt="Imagem" />
        </div>

        <div class="div-apousada-secundaria">
          <div class="texto">
            <h3>Alimentação</h3>
            <p>
              A pousada serve café da manhã em estilo continental ou buffet.
              nossos restaurantes funcionam 24hrs.
            </p>
          </div>
          <img src={img3} alt="Imagem" />
        </div>

        <div class="div-apousada-secundaria">
          <div class="texto">
            <h3>Recepção</h3>
            <p>Nossa recepção fica aberta 24hrs.</p>
          </div>
          <img src={img5} alt="Imagem" />
        </div>
      </div>
    </>
  )
}

export default Conteudo
