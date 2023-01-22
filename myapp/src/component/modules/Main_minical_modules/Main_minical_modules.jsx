import './Main_minical_modules.css'
import React, { useState } from 'react';
export function Main_minical_modules(){

    var currentDay = new Date();  
    var theYear = currentDay.getFullYear();
    var theMonth = currentDay.getMonth();
    var theDate  = currentDay.getDate();
    var theDayOfWeek = currentDay.getDay();
 
    var thisWeek = [];
    var thisWeekLeft = [];
    var thisWeekRight = [];

    for(var i=0; i<7; i++) 
    {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var dd = resultDay.getDate();
        dd = String(dd).length === 1 ? '0' + dd : dd;
        if(dd < theDate)
        {
            thisWeekLeft.push(dd);
        }
        else if(dd > theDate)
        {
            thisWeekRight.push(dd);
        }

        thisWeek[i] = dd;
    }

    thisWeekLeft = thisWeekLeft.join(" ");
    thisWeekRight = thisWeekRight.join(" ");

    return(
      <div className= 'mini_calendar'>
        <div className ='header'>
            S M T W T F S
        </div>
        <div className = 'this_week'>
            {thisWeekLeft} <span className= 'today'>{theDate}</span> {thisWeekRight}
        </div>
      </div>
  )
}