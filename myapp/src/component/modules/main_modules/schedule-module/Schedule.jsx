import './Schedule.css'
import Book from '../../../../assets/book.png'
import { useRecoilState } from 'recoil';
import { selectedDayState } from '../../../../atoms/user_atom';
import { useState } from 'react'

export function Schedule(){
  const [check, setCheck] = useState(false);

  const isCheck = () => {
    setCheck(!check)
  }

  return(
    <div className='Schedule-frame'>
      <span className='circle'></span>
      <span className='content'>
        Hello
      </span>
      {check ? <span className='check' onClick={isCheck}>👏</span> : <span className='check' onClick={isCheck}>☐</span>}
    </div>
  )
}

export function LeftSide(){

  return(
    <div className="LeftSide-frame">
      <Schedule />
    </div>
    
  )
}