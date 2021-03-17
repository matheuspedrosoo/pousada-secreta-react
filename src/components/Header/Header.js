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
          <AnchorLink href="#sobre" offset={100}>
            sobre
          </AnchorLink>
          <AnchorLink href="#rota" offset={100}>
            rota
          </AnchorLink>
          <AnchorLink href="#quartos" offset={100}>
            quartos
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Header
