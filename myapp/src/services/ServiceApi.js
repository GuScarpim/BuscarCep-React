import axios from 'axios';

const url = process.env.REACT_APP_STRING
const endpoint = "mentions/";

export default class MentionsServices {

  static Buscar(id) {
    // console.log(process.env.REACT_APP_STRING);
    return axios.get(url + endpoint)
      .then((response) => {
        return response.data
      })
      .catch((error) => { return error })
  }
}