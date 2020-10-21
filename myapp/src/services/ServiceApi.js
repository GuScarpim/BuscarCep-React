import axios from 'axios';

const url = axios.create({
  baseURL: 'https://br-cidade-estado-nodejs.glitch.me'
});

export default class ServiceApi {
  static Buscar(id) {
    return axios.get('/estados')
      .then((response) => {
        return response.data
      })
      .catch((error) => { return error })
  }

  static BuscarUf = () => {
    return axios.get('/estados')
      .then((response) => {
        return response.data
      })
      .catch((error) => { return error })
  }


}