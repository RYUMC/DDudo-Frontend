import axios from 'axios'

import {url} from '../static/static'

export const sign_up_api = (id, pw, name, age) => {
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

