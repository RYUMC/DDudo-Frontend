import axios from 'axios'

import {url} from '../static/static'

export async function ID_duplicate_check_api(id){
  const URL = url + '/user/'
  const response = await axios.get(
    URL + id
  )
  console.log(response.data);
  return response.data.result.duplicated;
}

