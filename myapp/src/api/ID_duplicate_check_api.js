import axios from 'axios'

import {url} from '../static/static'

export const ID_duplicate_check_api = (id) => {
  const URL = url + '/user/'
  const response = axios.get(
    URL+ id
  )
  return response
}

