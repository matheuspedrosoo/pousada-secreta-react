import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-nav">
        <div>
          <AnchorLink className="header-container-nav__pousada" href="#inicio">
            Pousada <span>Secreta</span>
          </AnchorLink>
        </div>

        <div className="header-container-nav__link">
          <AnchorLink href="#sobre">sobre</AnchorLink>
          <AnchorLink href="#rota">rota</AnchorLink>
          <AnchorLink href="#quartos">quartos</AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Header
