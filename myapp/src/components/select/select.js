import React, { Component } from 'react';

import './select.css';
import ServiceApi from '../../services/ServiceApi';

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: []
    };
  }

  componentDidMount = () => {
    this.buscarEstados();
  }

  buscarEstados = () => {
    ServiceApi.BuscarUf()
      .then(response => {
        this.setState({ item: response });
      })
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
          {this.state.item.map((item) => (
            <option key={item.id} value={item}>{item.estado}</option>
          ))}
        </select>
      </React.Fragment>
    );
  }
}




