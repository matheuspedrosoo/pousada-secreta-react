import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-nav">
        <div>
          <NavHashLink
            className="header-container-nav__pousada"
            to="/#inicio"
            scroll={el => el.scrollIntoView({ block: 'center' })}
          >
            Pousada <span>Secreta</span>
          </NavHashLink>
        </div>

        <div className="header-container-nav__link">
          <NavHashLink
            smooth
            to="/#sobre"
            scroll={el => el.scrollIntoView({ block: 'center' })}
          >
            sobre
          </NavHashLink>

          <NavHashLink
            to="/#rota"
            scroll={el => el.scrollIntoView({ block: 'center' })}
          >
            rota
          </NavHashLink>

          <NavHashLink
            to="/#quartos"
            scroll={el => el.scrollIntoView({ block: 'center' })}
          >
            quartos
          </NavHashLink>
        </div>
      </div>
    </div>
  )
}

export default Header
