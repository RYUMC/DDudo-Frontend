import logOut from '../../../../assets/logOut.png'
import Home from '../../../../assets/home.png'
import Setting from '../../../../assets/setting.png'
import Plus from '../../../../assets/plus.png'
import Add from '../../../../assets/add.png'
import navigation from '../../../../assets/navigation.png'

import { Link } from 'react-router-dom';
import './Main_navigation.css'

import { useState } from 'react'


export function Main_navigation(){
  const [openNav, setOpenNav] = useState(false)

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
  return(
    <div className='hidden-navigation-background' onClick={openNavigation}>
      <div className='hidden-naviagation'>
        <Hidden_Nav />
      </div>
    </div>
  )
}

function Hidden_Nav(){
  return(
    <div className='main-naviagation'>
      <header>
        DDuDo
      </header>
      <main>
        <div className='st'>MAIN APP</div>
        <Link to="/DDUdo-Fronted/main-page" className='item'><img src={Home}/> Home</Link>
        <div className='item'><img src={Add}/> Follow</div>
        <div className='item'><img src={Setting}/> Setting</div>
        <div className='st'>OTHERS</div>
        <div className='item'><img src={Plus}/> Add Schedule</div>
      </main>
      <footer>
        <span>Junhee</span>
        <Link to='/DDudo-Frontend'><img src={logOut} className="logout-button"/></Link>
      </footer>
    </div>
  )
}