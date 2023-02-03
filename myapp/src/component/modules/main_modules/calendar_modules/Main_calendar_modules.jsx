import './Main_calendar_modules.css'
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import moment from 'moment/moment';
import { useEffect } from 'react';
import { selectedDayState } from '../../../../atoms/user_atom';
import { useRecoilState } from 'recoil';
export function Main_calendar_modules(){

    const [value, onChange] = useState(new Date());
    const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState);

    useEffect(() => {
      const day = moment(value).format("YYYY-MM-DD").split('-');
      const dayState = {
        year : day[0],
        month : day[1],
        day : day[2]
      }
      setSelectedDay(dayState);
    },[value]);
  

    return(
        <div className='calandar-Frame'>
          <Calendar
            formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' }) } // 날짜 숫자로만 변환
            next2Label={null} // 다음 월 이동 2번째 버튼 삭제
            prev2Label={null} // 이전 월 이동 2번째 버튼 삭제
            onChange={onChange} 
            locale="en-GB" // 기본 영문으로 설정
            value={value} />
            <div> 
                {selectedDay.day} 
            </div>
        </div> )
  }