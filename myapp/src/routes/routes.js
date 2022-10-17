import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import MainFormulario from '../template/MainFormulario'
import MainValidacao from '../template/MainValidacao'
import MainTabela from '../template/MainTabela'

import Index from '../template/index'

export default props =>
    <Switch>
        <Route exact path='/' component={MainFormulario} />
        <Route exact path='/formulario' />
        <Route exact path='/validacao' component={MainValidacao} />
        <Route exact path='/tabela' component={MainTabela} />
        <Route exact path='/index' component={Index} />
        <Redirect exact from='*' to='/index' />
    </Switch>