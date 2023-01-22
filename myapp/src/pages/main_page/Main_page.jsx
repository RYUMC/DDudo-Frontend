
import './main_page.css'
import navigation from '../../assets/navigation.png'
import { Main_navigation } from '../../component/modules/main_modules/navigation/Main_navigation'
import { Time_schedule } from '../../component/modules/main_modules/time-schedule/Time_schedule'
import { useState } from 'react'
import { Main_title_modules } from '../../component/modules/main_modules/title_modules/Main_title_modules'
import { Main_minical_modules } from '../../component/modules/main_modules/minical_modules/Main_minical_modules'
import { Main_calendar_modules } from '../../component/modules/main_modules/calendar_modules/Main_calendar_modules'


function Nav({openNavigation}){
  return(
    <div className='hidden-navigation-background' onClick={openNavigation}>
      <div className='hidden-naviagation'>
        <Main_navigation />
      </div>
    </div>
  )
}

export function Main_page(){
  const [openNav, setOpenNav] = useState(false)

  const openNavigation = () => {
    setOpenNav(!openNav)
  }

  return(
    <div className={"main_page-container"}>
      {openNav && <Nav openNavigation={openNavigation}/>}
      <div className='left-side'>
        <header>
          <Main_title_modules/>
        </header>
        <div className='week-calendar'>
          <Main_minical_modules/>
        </div>
        <div className='main-calendar'>
          <Main_calendar_modules/>
        </div>
      </div>
      <div className='right-side'>
        <header>
          <div className='nav'>
            <img src={navigation} className='navigation-img' onClick={openNavigation}/>
          </div>
          <div className='title'>Feed</div>
        </header>
        <div className='left-side-schedule line'>

        </div>
        <div className='right-side-schedule'>
          <Time_schedule />
        </div>
      </div>
    </div>
  )
}