import axios from 'axios'

import {url} from '../static/static'

export const login_api = (id, pw) => {
  const URL = url + '/user'
  const response = axios.get(
    URL,
    {
      params: {
        id: id,
        pw: pw
      }
    }
  )
  return response
}

