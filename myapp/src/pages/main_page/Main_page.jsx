
import './main_page.css'
import navigation from '../../assets/navigation.png'
import { Main_navigation } from '../../component/modules/main_modules/navigation/Main_navigation'
import { Time_schedule } from '../../component/modules/main_modules/time-schedule/Time_schedule'
import { useState } from 'react'


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
        <header className='line'>
          
        </header>
        <div className='week-calendar line'>

        </div>
        <div className='main-calendar line'>

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