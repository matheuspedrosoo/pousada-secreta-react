import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PaginaInicial from '../pages/index'
import Quartos from '../pages/quartos/quartos'

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route exact path="/quartos" component={Quartos} />
    </Switch>
  </BrowserRouter>
)

export default Rotas
