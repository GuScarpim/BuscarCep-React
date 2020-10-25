import React, { Component } from 'react';
import './tabela.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Table from 'react-bootstrap/Table';
import ServiceApi from '../../services/ServiceApi';
import Axios from 'axios';
const baseURL = 'https://br-cidade-estado-nodejs.glitch.me/estados';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estados: []
    }
  }

  componentDidMount = () => {
    this.Buscar();
  }

  Buscar = () => {
    // ServiceApi.BuscarUf()
    Axios.get(baseURL)
      .then(response => {
        this.setState({ estados: response.data });
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <div className="responsive" >
            <h3>Tabela dinâmica</h3><br />
            <Table striped bordered hover responsive variant="dark">
              <thead className="head-table">
                <tr>
                  <th>Estado</th>
                  <th>UF</th>
                </tr>
              </thead>
              <tbody>
                {this.state.estados.map((item) => (
                  <tr key={item.id}>
                    <td key={item.estado} value={item.estado}>{item.estado}</td>
                    <td key={item.uf} value={item.uf}>{item.id}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}


