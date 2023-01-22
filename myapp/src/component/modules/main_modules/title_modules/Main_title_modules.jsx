import './Main_title_modules.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export function Main_title_modules(){
  
  const now = new Date();
  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const month = ['January','February','March','April','May','June','July','August','Setempber','October','November','December'];
  const today = week[now.getDay()];
  const todayMonth = month[now.getMonth()];
  const todayDay = now.getDate();

  return(
    <div className='Main_title_modules-container'>
      <div className='main_sub-title'>{today}, {todayMonth} {todayDay} </div>
      <div className='main_title'>To-Do List</div>
    </div>
  )
}