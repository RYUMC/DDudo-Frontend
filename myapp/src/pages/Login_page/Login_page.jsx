import { Outlet } from 'react-router-dom';
import './Login_page_background.css'

function Login_page(){

  return(
      <div className='Login_page_web'>
        <Outlet />
      </div>
  )
}

export default Login_page;