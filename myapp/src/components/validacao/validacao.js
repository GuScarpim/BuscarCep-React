import React, { Component } from 'react';

import MDBInput from '../input/input';
import Select from '../select/select';
import { IoIosSearch } from 'react-icons/io'
import Form from 'react-bootstrap/Form'

export default class validacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nome: '',
      senha: '',
      celular: '',
      url: '',
      horario: '',
      data: '',
      email: '',
      error_nome: '',
      error_senha: '',
      error_celular: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  validarCell = () => {
    if (this.state.celular.length <= 10) {
      this.setState({ error_celular: 'Insira o numéro com o DDD' })
    } else {
      this.setState({ error_celular: false })
    }
  }

  validarNome = () => {
    if (this.state.nome.length <= 2) {
      this.setState({ error_nome: 'Insira um nome válido' })
    } else {
      this.setState({ error_nome: false })
    }
  }

  validarSenha = () => {
    if (this.state.senha.length <= 5) {
      this.setState({ error_senha: 'Insira 5 números' })
    } else {
      this.setState({ error_senha: false })
    }
  }

  render() {
    return <div className="container">
      <div className="content-section introduction growl-demo">
        <div className="feature-intro">
          <h3><IoIosSearch /> Validar campos</h3>
        </div>
      </div>
      <Form >
        <div className="row">
          <div className="col-sm">
            <Select id="uf" label="UF" />

            <MDBInput label="E-mail" type="email" defaultValue={this.email} id="email" />

            <MDBInput label="Celular" value={this.celular} onKeyUp={this.validarCell}
              onChange={this.onChange} maxLength="12" id="celular" type="tel" />
            <span className="error">{this.state.error_celular}</span>

          </div>
          <div className="col-sm">
            <MDBInput label="Nome" value={this.nome} onKeyUp={this.validarNome}
              onChange={this.onChange} maxLength="20" id="nome"
              pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" />
            <span className="error">{this.state.error_nome}</span>

            <MDBInput label="CPF" value={this.cpf}
              onChange={this.onChange} maxLength="11" id="cpf" type="number" />

            <MDBInput label="Horário" value={this.cnpj} onKeyUp={this.validarHorario}
              onChange={this.onChange} maxLength="14" id="horario" type="time" />
          </div>

          <div className="col-sm">
            <MDBInput label="Senha" type="password" value={this.senha}
              onKeyUp={this.validarSenha} onChange={this.onChange} maxLength="20" id="senha" />
            <span className="error">{this.state.error_senha}</span>

            <MDBInput label="URL" value={this.url} onKeyUp={this.validarUrl}
              onChange={this.onChange} id="url" type="url" />

            <MDBInput label="Data" value={this.data} onKeyUp={this.validarData}
              onChange={this.onChange} maxLength="11" id="data" type="date" />

            <button onSubmit={this.handleSubmit}> Botao</button>
          </div>
        </div>
      </Form>

    </div >
  }
}