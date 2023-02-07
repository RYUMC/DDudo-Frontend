import {selectedDayState} from '../atoms/user_atom'
import moment from 'moment/moment';

import { selector, atom } from 'recoil';
import axios from 'axios'

// api 재요청 atom
// selector가 atom을 구독하게 하여 refresh가 필요할 경우 데이터 처리 필요없이 api 데이터 갱신
// 따로 selector의 값을 return 받아 데이터를 처리할 필요가 없음
const refreshAtom = atom({
  key: 'refreshAtom',
  default: 1
})

export const scheduleAPISelector = selector({
  key: scheduleAPISelector,
  get: async ({get}) => {
    // refresh 구독
    get(refreshAtom)
    // selectedDay의 값을 구독 상태가 바뀌면 자동으로 실행
    const dayState = get(selectedDayState)
    const day = moment(dayState).format("YYYY-MM-DD").split('-');
    // const dayState = {
    //   year : day[0],
    //   month : day[1],
    //   day : day[2]
    // }
    // const URL = url + '/user'
    // const response = await axios.get(URL,
    //   {params: {
    //     id: id,
    //     pw: pw
    //   }}
    // )
    // return response.data.result.success;
  },
  set: ({set})=>{
    // selector의 상태를 바꿔줌 -> get요청에서 구독하고 있는 값이 바뀌므로 api 재요청

    // ex) main_template에서 api값을 받아 날짜별로 데이터를 뿌려주고있음
    // 근데 스케쥴을 추가함 그럼 api를 호출해야하는 데 api 호출은 반드시 값을 return 받음
    // 하지만 atom을 구독하게 하여 refresh 요청하는 component에서는 값을 return 받을 필요가 없음
    set(refreshAtom, (id) => id + 1)
  }
})