import axios from 'axios'

import {url} from '../static/static'

export const login_api = (id, pw) => {
  const URL = url + '/user'
  const response = axios.get(
    "http://15.164.149.157:8080/user",
    {
      params: {
        id: id,
        pw: pw
      }
    }
  )
  return response
}

