import axios from 'axios';

const url = 'https://br-cidade-estado-nodejs.glitch.me/estados'
export default class ServiceApi {

  static Buscar(id) {
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