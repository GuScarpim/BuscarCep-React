import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { IoIosSearch } from 'react-icons/io'
import Formulario from '../formulario/formulario'
import Validacao from '../validacao/validacao'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { selecionar: '' }
    }

    onChange = (e) => {
        this.setState({ selecionar: e.target.value });
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
            </select>
            {this.state.selecionar == 1
                ? <Formulario />
                : (this.state.selecionar == 2
                    ? <Validacao />
                    : (this.state.selecionar == 0
                        ? false
                        : false
                    )
                )
            }


        </div >
    }
}