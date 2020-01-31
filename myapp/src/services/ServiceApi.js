import axios from 'axios';

// const url = process.env.REACT_APP_STRING
const url = 'https://br-cidade-estado-nodejs.glitch.me/estados'
const urlCnpj = 'https://api.power.cash/users?token=teste-SFMyNTY.g3QAAAACZAAEZGF0YW0AAAABMWQABnNpZ25lZG4GAAZg2itZAQ.ZUcMBnfcIEzJse5xcyzya0NLawHG0cAjeKhA71sHXxE'
// 9b78830a741a8330ee74855624e796fd
// ${props.cep}
export default class ServiceApi {

  static Buscar(id) {
    // console.log(process.env.REACT_APP_STRING);
    return axios.get(url )
      .then((response) => {
        return response.data
      })
      .catch((error) => { return error })
  }

  static BuscarUf = () => {
    return axios.get(url )
      .then((response) => {
        return response.data
      })
      .catch((error) => { return error })
  }

  static BuscarCnpj = () => {
    return axios.get(urlCnpj )
      .then((response) => {
        console.log(response.data)
        return response.data 
        
      })
      .catch((error) => { return error })
  }

}