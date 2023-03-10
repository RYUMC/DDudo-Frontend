import './Main_minical_modules.css'
import React, { useState } from 'react';


function CreateWeek(){
    var currentDay = new Date();
    var theYear = currentDay.getFullYear();
    var theMonth = currentDay.getMonth();
    var theDate  = currentDay.getDate();
    var theDayOfWeek = currentDay.getDay();

    var thisWeekLeft = [];
    var thisWeekRight = [];

    const isSameDay = (target1, target2) => {
        return target1.getFullYear() === target2.getFullYear() &&
          target1.getMonth() === target2.getMonth() &&
          target1.getDate()=== target2.getDate();
      }

    for(var i=0; i<7; i++) {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var dd = resultDay.getDate();
        dd = String(dd).length === 1 ? '0' + dd : dd;
        if(isSameDay(currentDay,resultDay))
        {}
        else if(currentDay > resultDay){
            thisWeekLeft.push(<span>{dd}</span>);
        }
        else if(currentDay < resultDay){
            thisWeekRight.push(<span>{dd}</span>);
        }
    }
    return (
        <>
            {thisWeekLeft}
            <span className='today'>{theDate}</span>
            {thisWeekRight}
        </>
    )
}

export function Main_minical_modules(){
    return(
      <div className='mini_calendar'>
        <div className ='header'>
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
        </div>
        <div className = 'this_week'>
            <CreateWeek />
        </div>
        
      </div>
  )
}