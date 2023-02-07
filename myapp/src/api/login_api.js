import axios from 'axios'

import {url} from '../static/static'

export async function login_api(id, pw){
  const URL = url + '/user'
  const response = await axios.get(URL,{
    params: {
      id: id,
      pw: pw
    }
  })
  return response.data.result.success;
}

export async function ID_duplicate_check_api(id){
  const URL = url + '/user/'
  const response = await axios.get(
    URL + id
  )
  console.log(response.data);
  return response.data.result.duplicated;
}

export async function sign_up_api(id, pw, name, age){
  const URL = url + '/user'
  const response = axios.post(
    URL,
    {
        id: id,
        pw: pw,
        name: name,
        age: age
    }
  )
  return response
}
