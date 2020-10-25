import React, { Component } from 'react';

import './select.css';
import Axios from 'axios';
const baseURL = 'https://br-cidade-estado-nodejs.glitch.me/estados';
export default class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estados: []
    };
  }

  componentDidMount = () => {
    this.buscarEstados();
  }

  buscarEstados = () => {
    Axios.get(baseURL)
      .then(response => {
        this.setState({ estados: response.data });
        console.log('respo', response.data)
      }).catch(error => {
        console.log('erro', error)
      })
    // ServiceApi.BuscarUf()
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <label className="label"></label>
        <select value={this.props.value} onChange={this.onChange} id={this.props.id}>
          <option>Selecione o Estado</option>
          {this.state.estados.map((item) => (
            <option key={item.id} value={item}>{item.estado}</option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}




