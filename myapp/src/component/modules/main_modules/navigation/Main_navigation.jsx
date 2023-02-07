import logOut from '../../../../assets/logOut.png'
import Home from '../../../../assets/home.png'
import Setting from '../../../../assets/setting.png'
import Plus from '../../../../assets/plus.png'
import Add from '../../../../assets/add.png'
import navigation from '../../../../assets/navigation.png'

import { Link, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Main_navigation.css';

import { Login_service } from '../../../../services/login_service'

import { AddSchedule } from '../add-schedule-modules/AddSchedule' 
import { Calendar } from 'react-calendar'

export function Main_navigation(){
  const [openNav, setOpenNav] = useState(false);
  
  const openNavigation = () => {
    setOpenNav(!openNav)
  }

  return(
    <>
    {!openNav?
      <div className='nav'>
        <img src={navigation} className='navigation-img' onClick={openNavigation}/>
      </div> :
      <Nav openNavigation={openNavigation}/>
    }
    </>
  )
}


function Nav({openNavigation}){
  const [openModal, setOpenModal] = useState(false)
  const location = useLocation()

  return(
    <div className='hidden-navigation-background' onClick={openNavigation}>
      {(openModal) && <div className='schedule-modal'>{<AddSchedule />}</div>}
      <div className='hidden-naviagation'>
        <Hidden_Nav openModal = {openModal} setOpenModal = {setOpenModal}/>
      </div>
    </div>
  )
}

function Hidden_Nav({openModal, setOpenModal}){
  const service = Login_service();

  const isLogOut = () => {
    service.logout()
  }

  return(
    <div className='main-naviagation'>
      <header>
        DDuDo
      </header>
      <main>
        <div className='st'>MAIN APP</div>
        <Link to="/DDUdo-Fronted/main" className='item'><img src={Home}/> Home</Link>
        <div className='item'><img src={Add}/> Follow</div>
        <div className='item'><img src={Setting}/> Setting</div>
        <div className='st'>OTHERS</div>
        <div className='item' onClick={(e)=>{
          e.stopPropagation()
          setOpenModal(!openModal)
        }}><img src={Plus}/> Add Schedule</div>
      </main>
      <footer>
        <span>{localStorage.getItem("user")}</span>
        <img src={logOut} onClick={isLogOut} className="logout-button"/>
      </footer>
    </div>
  )
}