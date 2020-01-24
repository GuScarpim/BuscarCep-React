import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import MDBInput from '../input/input';
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
      error: null
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (event) => {

  }

  onBlurFunction = () => {
    if (this.state.celular.length.value === 9) {
      this.setState({ error: 'Favor Informe o número sem o DD' })
    } else if (this.state.celular.length === 9) {
      this.setState({ error: 'Muda de novo' })
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
            <MDBInput label="E-mail" type="email" defaultValue={this.email} id="email" />
            <MDBInput label="Celular" type="text" value={this.celular} onBlur={this.onBlurFunction}
              onChange={this.onChange} maxLength="11" icon="map-marker-alt" />
            {this.state.error}
            <MDBInput label="CPF" />
          </div>
          <div className="col-sm">
            <MDBInput label="Nome" />
            <MDBInput label="UF" />
            <MDBInput label="CNPJ" />
          </div>
          <div className="col-sm">
            <MDBInput label="Senha" type="password" />
            <MDBInput label="RG" />
            <MDBInput label="Data" />
            <button onSubmit={this.handleSubmit}> Botao</button>
          </div>
        </div>
      </Form>

    </div >
  }
}


// import React, { Component } from 'react';
// import classNames from 'classnames';
// import validator from 'validator';

// export default class validacao extends Component {
//   formDefaults = {
//     email: { value: '', isValid: true, message: '' },
//     password: { value: '', isValid: true, message: '' },
//     confirmPassword: { value: '', isValid: true, message: '' }
//   }

//   state = {
//     ...this.formDefaults
//   };

//   onChange = (e) => {
//     const state = {
//       ...this.state,
//       [e.target.name]: {
//         ...this.state[e.target.name],
//         value: e.target.value,
//       }
//     };

//     this.setState(state);
//   }

//   onSubmit = (e) => {
//     e.preventDefault();
//     // reset states before the validation procedure is run.
//     this.resetValidationStates();
//     // run the validation, and if it's good move on.
//     if (this.formIsValid()) {
//       // form processing here....
//     }
//   }

//   formIsValid = () => {
//     const email = { ...this.state.email };
//     const password = { ...this.state.password };
//     const confirmPassword = { ...this.state.confirmPassword };
//     let isGood = true;

//     if (!validator.isEmail(email.value)) {
//       email.isValid = false;
//       email.message = 'Not a valid email address';
//       isGood = false;
//     }

//     // perform addtion validation on password and confirmPassword here...

//     if (!isGood) {
//       this.setState({
//         email,
//         password,
//         confirmPassword,
//       });
//     }

//     return isGood;
//   }

//   resetValidationStates = () => {
//     const state = JSON.parse(JSON.stringify(this.state));

//     Object.keys(state).map(key => {
//       if (state[key].hasOwnProperty('isValid')) {
//         state[key].isValid = true;
//         state[key].message = '';
//       }
//     });

//     this.setState(state);
//   }

//   resetForm = () => {
//     this.setState(...this.formDefaults);
//   }

//   render() {
//     const { email, password, confirmPassword } = this.state;
//     /*
//     Each of the group classes below will include the 'form-group' class,
//     and will only include the 'has-error' class if the isValid value is false.
//     */
//     const emailGroupClass = classNames('form-group',
//       { 'has-error': !email.isValid }
//     );
//     const passwordGroupClass = classNames('form-group',
//       { 'has-error': !password.isValid }
//     );
//     const confirmGroupClass = classNames('form-group',
//       { 'has-error': !confirmPassword.isValid }
//     );

//     return (
//       <div className="container">
//         <form className="form-signin" onSubmit={this.onSubmit}>
//           <h2 className="form-signin-heading">Create Account</h2>

//           <div className={emailGroupClass}>
//             <input
//               type="text"
//               name="email"
//               className="form-control"
//               placeholder="Email address"
//               value={email.value}
//               onChange={this.onChange}
//               autoFocus
//             />
//             <span className="help-block">{email.message}</span>
//           </div>

//           <div className={passwordGroupClass}>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Password"
//               value={password.value}
//               onChange={this.onChange}
//             />
//             <span className="help-block">{password.message}</span>
//           </div>

//           <div className={confirmGroupClass}>
//             <input
//               type="password"
//               name="confirmPassword"
//               className="form-control"
//               placeholder="Confirm Password"
//               value={confirmPassword.value}
//               onChange={this.onChange}
//             />
//             <span className="help-block">{confirmPassword.message}</span>
//           </div>

//           <button
//             className="btn btn-lg btn-primary btn-block"
//             type="submit"
//           >
//             Create Account
//           </button>
//         </form>
//       </div>
//     );
//   }
// };