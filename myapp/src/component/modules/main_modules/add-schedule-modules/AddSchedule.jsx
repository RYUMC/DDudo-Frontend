import './AddSchedule.css'
import { useState } from 'react';

import { Main_calendar_modules } from '../calendar_modules/Main_calendar_modules'

import plus from '../../../../assets/plus.png' 

import DatePicker from "react-datepicker";
import Switch from "react-switch";
import "react-datepicker/dist/react-datepicker.css";


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
      dateFormat={day+":  h:mm aa"}
      disabled = {disable}
    />
  )
}

export function CustomToggle({check, set, color, className, disable}){
  return(
    <Switch
      onChange={set}
      checked={check}
      onColor={color}
      className={className}
      disabled = {disable}
    />
  )
}


function AddContent({firstPicker, secondPicker, setFirstPicker, setSecondPicker}){
  const [firstSelectTime, setFirstSelectTime] = useState(new Date())
  const [secondSelectTime, setSecondSelectTime] = useState(new Date())
  const [checkToggle, setCheckToggle] = useState(true)
  const [isAlways, setIsAlways] = useState(false)

  const onFirstPicker = () =>{
    if(secondPicker) return true
    if(!firstPicker) return true
    return false
  }

  const onSecondPicker = () =>{
    if(firstPicker) return true
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

  const toggleDisable = () => {
    if (onFirstPicker() && onSecondPicker()) return false
    return true
  }

  return (
    <div className='Add-content-layout'>
      <div>
        <div className='title'>내용</div>
        <div className='content-input'><span className='category-circle'></span><input type="text" placeholder='일정 제목'/></div>
      </div>
      <div>
        <div className='title'>일정<CustomToggle check={checkToggle} set={setCheckToggle} color={"#F3C349"} className={"toggle-size"} disable={toggleDisable()}/></div>
        <div className={!checkToggle && 'prevent'}>
          <div className="time-picker">
            <span style={{display: 'inline-block', width: '85%', zIndex: '-10'}}>
              <CustomTimePicker selectTime={firstSelectTime} setSelectTime={setFirstSelectTime} customClass="custom-time-picker" day="" disable={onFirstPicker()}/>
            </span>
            <span className='edit-button' onClick={changeFirstPicker}>{onFirstPicker() ? '입력' : '저장'}</span>
          </div>
          <div className="time-picker">
            <span style={{display: 'inline-block', width: '85%'}}>
              <CustomTimePicker selectTime={secondSelectTime} setSelectTime={setSecondSelectTime} customClass="custom-time-picker" day="" disable={onSecondPicker()}/>
            </span>
            <span className='edit-button' onClick={changeSecondPicker}>{onSecondPicker() ? '입력' : '저장'}</span>
          </div>
          <div className='always-layout'>하루 종일<CustomToggle check={isAlways} set={setIsAlways} color={"#9575D1"} className={"always-layout-toggle"} disable={toggleDisable()}/></div>
        </div>
      </div>
      <div>
        <div className='title'>초대 <img src={plus} className/></div>
        <div className='join-list'>이은섭 / 이승민 / 오진영 / 정준희</div>
      </div>
      <footer>
        <button>추가</button>
      </footer>
    </div>
  )
}

export function AddSchedule(){
  const [firstPicker, setFirstPicker] = useState(false)
  const [secondPicker, setSecondPicker] = useState(false)

  return(
    <div className='add-schedule' onClick={(e)=> e.stopPropagation()}>
      <div className={(firstPicker || secondPicker) ? 'layout-left' : 'layout-left calandar-prevent'}>
        <Main_calendar_modules />
      </div>
      <div className='layout-right'>
        <AddContent firstPicker={firstPicker} secondPicker={secondPicker} setFirstPicker={setFirstPicker} setSecondPicker={setSecondPicker}/>
      </div>
    </div>
  )
}