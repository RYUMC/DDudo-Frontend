import './Main_template.css'
import { Time_schedule } from '../../modules/main_modules/time-schedule/Time_schedule'
import { Main_title_modules } from '../../modules/main_modules/title_modules/Main_title_modules'
import { Main_minical_modules } from '../../modules/main_modules/minical_modules/Main_minical_modules'
import { Main_calendar_modules } from '../../modules/main_modules/calendar_modules/Main_calendar_modules'
import { LeftSide } from '../../modules/main_modules/schedule-module/Schedule'


import moment from 'moment/moment';
import { useState, useEffect, useMemo } from 'react';
import { selectedDayState } from '../../../atoms/user_atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { scheduleAPISelector } from '../../../api/schedule_api'


export function Main_template(){
  const [selectedDay, setSelectedDay] = useRecoilState(selectedDayState);
  const scheduleValue = useRecoilValue(scheduleAPISelector)
  // useEffect(()=>{console.log(scheduleValue)}, [selectedDay])

  return(
    <div className="main_template-container">
      <div className='left-side'>
        <header>
          <Main_title_modules/>
        </header>
        <div className='week-calendar'>
          <Main_minical_modules/>
        </div>
        <div className='main-calendar'>
          <Main_calendar_modules value={selectedDay} onChange={setSelectedDay}/>
        </div>
      </div>
      <div className='right-side'>
        <header>
          <div className='title'>Feed</div>
        </header>
        <div className='left-side-schedule'>
          <LeftSide />
        </div>
        <div className='right-side-schedule'>
          <Time_schedule />
        </div>
      </div>
    </div>
  )
}