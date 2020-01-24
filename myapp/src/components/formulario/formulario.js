import React, { Component } from 'react';
import axios from 'axios';
import './formulario.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import MDBInput from '../input/input';
import { IoIosSearch } from 'react-icons/io'
import { Growl } from 'primereact/growl';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { cep: '', item: [] }
  }

  showSuccess = () => {
    this.growl.show({ severity: 'success', summary: 'CEP Válido', detail: 'Dados retornado com sucesso' });
  }
  showError = () => {
    this.growl.show({ severity: 'error', summary: 'CEP Inválido', detail: 'Favor verifique o seu CEP' });
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  buscarCep = () => {
    axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then(response => {
        this.showSuccess();
        this.setState({ item: response.data })
        console.log(response.data)
      })
      .catch(error => {
        return this.showError();
      })
  }

  render() {
    return (
      <div className="container">
        <div className="content-section introduction growl-demo">
          <div className="feature-intro">
            <h3><IoIosSearch /> Insira um cep válido</h3>
          </div>
        </div>
        <Growl ref={(el) => this.growl = el} />
        <div className="row">
          <div className="col-sm">
            <MDBInput label="Cep" defaultValue={this.state.cep} onChange={this.onChange}
              maxLength="8" id="cep" icon="map-marker-alt" onBlur={this.buscarCep} />
            <MDBInput label="Logradouro" icon="home" value={this.state.item.logradouro} id="logradouro" />
            <MDBInput label="Complemento" icon="user-friends" value={this.state.item.complemento} id="complemento" />
          </div>
          <div className="col-sm">
            <MDBInput label="Bairro" icon="map-signs" value={this.state.item.bairro} id="bairro" />
            <MDBInput label="Localidade" icon="map-marked" value={this.state.item.localidade} id="localidade" />
            <MDBInput label="UF" icon="city" value={this.state.item.uf} id="uf" />
          </div>
          <div className="col-sm">
            <MDBInput label="Unidade" icon="map-pin" value={this.state.item.unidade} id="unidade" />
            <MDBInput label="Ibge" icon="poll" value={this.state.item.ibge} id="ibge" />
            <MDBInput label="Gia" icon="book-reader" value={this.state.item.gia} id="gia" />
          </div>
        </div>
      </div>
    );
  }
}


