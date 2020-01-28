import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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

  validarNome = () => {
    if (this.state.nome.length <= 2) {
      this.setState({ error_nome: 'Insira um nome válido' })
    } else {
      this.setState({ error_nome: false })
    }
  }

  validarSenha = (senha) => {
    // 8 caracteres no mínimo
    // 1 Letra Maiúscula no mínimo
    // 1 Número no mínimo
    // 1 Símbolo no mínimo: $*&@#
    // Não permiti sequência igual (aa, bb, 44, etc) Gu@198756
    // console.log(r.test('Gu@198756'));
  
    if (this.state.senha != RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/)) {
      this.setState({ error_senha: 'A senha deve conter letras, número e caractere especial' })
    } else {
      this.setState({ error_senha: false })
    }
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
              onChange={this.onChange} maxLength="11" id="celular" />
            {this.state.error_celular}

          </div>
          <div className="col-sm">
            <MDBInput label="Nome" value={this.nome} onKeyUp={this.validarNome}
              onChange={this.onChange} maxLength="20" id="nome" />
            {this.state.error_nome}

            <MDBInput label="CPF" value={this.cpf} onKeyUp={this.validarCpf}
              onChange={this.onChange} maxLength="11" id="cpf" />
            {this.state.error_cpf}

            <MDBInput label="CNPJ" value={this.cnpj} onKeyUp={this.validarCnpj}
              onChange={this.onChange} maxLength="11" id="cnpj" />
            {this.state.error_cnpj}
          </div>
          <div className="col-sm">
            <MDBInput label="Senha" type="text" value={this.senha} onKeyUp={this.validarSenha}
              onChange={this.onChange} maxLength="20" id="senha" />
            {this.state.error_senha}

            <MDBInput label="RG" value={this.rg} onKeyUp={this.validarRg}
              onChange={this.onChange} maxLength="11" id="rg" />
            {this.state.error_rg}

            <MDBInput label="Data" value={this.data} onKeyUp={this.validarData}
              onChange={this.onChange} maxLength="11" id="data" />
            {this.state.error_data}
            <button onSubmit={this.handleSubmit}> Botao</button>
          </div>
        </div>
      </Form>

    </div >
  }
}