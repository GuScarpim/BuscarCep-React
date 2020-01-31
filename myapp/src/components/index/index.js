import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { IoIosSearch } from 'react-icons/io';
import Formulario from '../formulario/formulario';
import Validacao from '../validacao/validacao';
import TabelaResponsiva from '../tabela/tabela';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { selecionar: '' }
    }

    onChange = (e) => {
        this.setState({ selecionar: e.target.value });
    }

    funcaoSwitch = () => {
        let selecionar;
        switch (this.state.selecionar) {
            case '0':
                selecionar = ''
                break;
            case '1':
                selecionar = <Formulario />
                break;
            case '2':
                selecionar = <Validacao />
                break;
            case '3':
                selecionar = <TabelaResponsiva />
                break;
            default:
                break;
        }
        return selecionar;
    }

    render() {
        return <div className="container">
            <div className="content-section introduction growl-demo">
                <div className="feature-intro">
                    <h3><IoIosSearch /> Escolha uma opção</h3>
                </div>
            </div>
            <label className="label"></label>
            <select value={this.state.selecionar} onChange={this.onChange}>
                <option value='0'>Selecione o Estado</option>
                <option value='1'>Buscar CEP</option>
                <option value='2'>Validar campos</option>
                <option value='3'>Tabela Dinâmica</option>
            </select>
            <br /><br /><hr />
            {this.funcaoSwitch()}
        </div >
    }
}