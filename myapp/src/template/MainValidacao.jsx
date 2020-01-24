import './Main.css'
import React from 'react'

import Validacao from '../components/validacao/validacao'
import Header from '../template/Header'

export default props =>
    <React.Fragment>
        <Header header="Validação de campos" subheader="E-mail, Password..." icone="fa fa-home icone-header"/>
        <main className="content container-fluid">
            <div className="p-5 mt-3">
             <Validacao />
            </div>
        </main>
    </React.Fragment>
