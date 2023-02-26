import './AddSchedule.css'
import { useMemo, useState } from 'react';

import { Main_calendar_modules } from '../calendar_modules/Main_calendar_modules'

import plus from '../../../../assets/plus.png' 

import DatePicker from "react-datepicker";
import Switch from "react-switch";
import "react-datepicker/dist/react-datepicker.css";

import { Schedule_service } from '../../../../services/schdule_service';


import moment from 'moment/moment';


export function CustomTimePicker({selectTime, setSelectTime, customClass, day, disable}){
  return(
    <DatePicker
      className={customClass}
      selected={selectTime}
      onChange={(date) => {
        setSelectTime(date)
      }}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={5}
      timeCaption="Time"
      dateFormat={day+"  :  h:mm aa"}
      disabled = {disable}
    />
  )
}

export function CustomToggle({check, set, color, className}){
  return(
    <Switch
      onChange={set}
      checked={check}
      onColor={color}
      className={className}
    />
  )
}

function AddContent({firstPicker, secondPicker, setFirstPicker, setSecondPicker, firstDate, secondDate}){

  const scheduleService = Schedule_service()

  const [firstSelectTime, setFirstSelectTime] = useState(new Date())
  const [secondSelectTime, setSecondSelectTime] = useState(new Date())
  const [isAlways, setIsAlways] = useState(true)

  const [content, setContent] = useState("")

  const onFirstPicker = () =>{
    if(secondPicker || isAlways) return true
    if(!firstPicker) return true
    return false
  }

  const onSecondPicker = () =>{
    if(firstPicker || isAlways) return true
    if(!secondPicker) return true
    return false
  }

  const changeFirstPicker = () =>{
    if (secondPicker) return
    setFirstPicker(!firstPicker)
  }

  const changeSecondPicker = () => {
    if(firstPicker) return
    setSecondPicker(!secondPicker)
  }

  const changeToggle = () => {
    if(isAlways){
      setIsAlways(false)
      setFirstSelectTime(new Date())
      setSecondSelectTime(new Date())
    }
    else{
      let tm = new Date()
      setIsAlways(true)
      setFirstSelectTime(tm.setHours(0, 0, 0, 0))
      setSecondSelectTime(tm.setHours(0, 0, 0, 0))
    }
  }

  const firstPickerMemo = useMemo(()=>onFirstPicker(), [firstPicker, isAlways])
  const secondPickerMemo = useMemo(()=>onSecondPicker(), [secondPicker, isAlways])

  return (
    <div className='Add-content-layout'>
      <div>
        <div className='title'>내용</div>
        <div className='content-input'><span className='category-circle'></span><input type="text" value={content} onChange={e=>setContent(e.currentTarget.value)} placeholder='일정 제목'/></div>
      </div>
      <div>
        <div className='title'>일정</div>
        <div>
          <div className="time-picker">
            <span style={{display: 'inline-block', width: '85%', zIndex: '-10'}}>
              <CustomTimePicker selectTime={firstSelectTime} setSelectTime={setFirstSelectTime} customClass="custom-time-picker" day={firstDate} disable={firstPickerMemo}/>
            </span>
            <span className='edit-button' onClick={changeFirstPicker}>{!firstPicker ? '선택' : '저장'}</span>
          </div>
          <div className="time-picker">
            <span style={{display: 'inline-block', width: '85%'}}>
              <CustomTimePicker selectTime={secondSelectTime} setSelectTime={setSecondSelectTime} customClass="custom-time-picker" day={secondDate} disable={secondPickerMemo}/>
            </span>
            <span className='edit-button' onClick={changeSecondPicker}>{!secondPicker ? '선택' : '저장'}</span>
          </div>
          <div className='always-layout'>하루 종일<CustomToggle check={isAlways} set={changeToggle} color={"#9575D1"} className={"always-layout-toggle"}/></div>
        </div>
      </div>
      <div>
        <div className='title'>초대 <img src={plus} className/></div>
        <div className='join-list'>이은섭 / 이승민 / 오진영 / 정준희</div>
      </div>
      <footer>
        <button onClick={e=>scheduleService.addSchedule()}>추가</button>
      </footer>
    </div>
  )
}

export function AddSchedule(){
  const [firstPicker, setFirstPicker] = useState(false)
  const [secondPicker, setSecondPicker] = useState(false)

  const [firstTime, onChangeFirstTime] = useState(new Date())
  const [secondTime, onChangeSecondTime] = useState(new Date())

  const firstDate = useMemo(()=>{
    const day = moment(firstTime).format("YYYY-MM-DD");
    return day
  }, [firstTime])

  const secondDate = useMemo(()=>{
    const day = moment(secondTime).format("YYYY-MM-DD");
    return day
  }, [secondTime])
  
  return(
    <div className='add-schedule' onClick={(e)=> e.stopPropagation()}>
      <div className={(firstPicker || secondPicker ) ? 'layout-left' : 'layout-left calandar-prevent'}>
        <Main_calendar_modules value={secondPicker? secondTime : firstTime} onChange={secondPicker ? onChangeSecondTime : onChangeFirstTime}/>
      </div>
      <div className='layout-right'>
        <AddContent firstPicker={firstPicker} secondPicker={secondPicker} setFirstPicker={setFirstPicker} setSecondPicker={setSecondPicker} firstDate={firstDate} secondDate={secondDate} />
      </div>
    </div>
  )
}