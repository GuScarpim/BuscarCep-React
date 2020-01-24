import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import MainFormulario from '../template/MainFormulario';
import MainValidacao from '../template/MainValidacao';

// import Home from '../components/home/Home'
// import UserCrud from '../components/user/UserCrud'
// import Teste1 from '../components/test/teste1'

export default props =>
    <Switch>
        <Route exact path='/' component={MainFormulario} />
        <Route path='/formulario' />
        <Route path='/validacao' component={MainValidacao}/>
        <Redirect from='*' to='/' />
    </Switch>