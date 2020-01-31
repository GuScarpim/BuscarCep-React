import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import MainFormulario from '../template/MainFormulario';
import MainValidacao from '../template/MainValidacao';
import MainTabela from '../template/MainTabela';

import Index from '../template/index';

export default props =>
    <Switch>
        <Route exact path='/' component={MainFormulario} />
        <Route path='/formulario' />
        <Route path='/validacao' component={MainValidacao}/>
        <Route path='/tabela' component={MainTabela}/>
        <Route path='/index' component={Index}/>
        <Redirect from='*' to='/index' />
    </Switch>