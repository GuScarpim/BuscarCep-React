import axios from 'axios';

// const url = process.env.REACT_APP_STRING
const url = 'https://br-cidade-estado-nodejs.glitch.me/estados'

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

}