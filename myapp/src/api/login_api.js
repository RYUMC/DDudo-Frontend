import axios from 'axios'

import {url} from '../static/static'

export async function login_api(id, pw){
  const URL = url + '/user'
  const response = await axios.get(URL,
  {params: {
    id: id,
    pw: pw
  }})
  return response.data.result.success;
}



