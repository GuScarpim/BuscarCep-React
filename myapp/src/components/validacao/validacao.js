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
      uf: '',
      rg: '',
      cpf: '',
      cnpj: '',
      data: '',
      email: '',
      error_nome: '',
      error_senha: '',
      error_celular: '',
      error_uf: '',
      error_rg: '',
      error_cpf: '',
      error_cnpj: '',
      error_data: ''
    }
  }

  componentDidMount() {
    // let r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;
    // console.log(r.test('Gu@198756'));
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

  validarCpf = () => {
    if (this.state.cpf.length <= 10) {
      this.setState({ error_cpf: 'Insira todos os números do cpf' })
    } else {
      this.setState({ error_cpf: false })
    }
  }

  validarCnpj = () => {
    if (this.state.cnpj.length <= 13) {
      this.setState({ error_cnpj: 'Insira todos os números do cnpj' })
    } else {
      this.setState({ error_cnpj: false })
    }
  }

  validarNome = () => {
    if (this.state.nome.length <= 2) {
      this.setState({ error_nome: 'Insira um nome válido' })
    } else {
      this.setState({ error_nome: false })
    }
  }

  validarSenha = (e) => {
    // let re = /(\d{3}|\d{2}|\(\d{2}\))\s*(\d{9}|\d{8})/;

    // if (this.state.senha !== re) {
    //   this.setState({ error_senha: 'A senha deve conter letras, número e caractere especial' })
    // }
    // else {
    //   this.setState({ error_senha: false })
    // }
    this.setState({ senha: this.state.senha.replace(/([^\d\s/-])/g, '')})
  }

  validarRg = () => {
    if (this.state.nome.length <= 2 || this.state.nome != String) {
      this.setState({ error_nome: 'Insira um nome válido' })
    } else {
      this.setState({ error_nome: false })
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

            <MDBInput label="Celular" type="text" value={this.celular} onKeyUp={this.validarCell}
              onChange={this.onChange} maxLength="12" id="celular" />
            <span className="error">{this.state.error_celular}</span>

          </div>
          <div className="col-sm">
            <MDBInput label="Nome" value={this.nome} onKeyUp={this.validarNome}
              onChange={this.onChange} maxLength="20" id="nome" />
            <span className="error">{this.state.error_nome}</span>

            <MDBInput label="CPF" value={this.cpf} onKeyUp={this.validarCpf}
              onChange={this.onChange} maxLength="11" id="cpf" />
            <span className="error">{this.state.error_cpf}</span>

            <MDBInput label="CNPJ" value={this.cnpj} onKeyUp={this.validarCnpj}
              onChange={this.onChange} maxLength="14" id="cnpj" />
            <span className="error">{this.state.error_cnpj}</span>
          </div>

          <div className="col-sm">
            <MDBInput label="Senha" type="text" value={this.senha} onKeyUp={this.validarSenha}
              onChange={this.onChange} maxLength="20" id="senha" />
            <span className="error">{this.state.error_senha}</span>
            {this.state.senha}

            <MDBInput label="RG" value={this.rg} onKeyUp={this.validarRg}
              onChange={this.onChange} maxLength="11" id="rg" />
            <span className="error">{this.state.error_rg}</span>

            <MDBInput label="Data" value={this.data} onKeyUp={this.validarData}
              onChange={this.onChange} maxLength="11" id="data" />
            <span className="error">{this.state.error_data}</span>

            <button onSubmit={this.handleSubmit}> Botao</button>
          </div>
        </div>
      </Form>

    </div >
  }
}