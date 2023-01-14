import '../css/Login_page_background.css'
import '../css/Register_page.css'
import { Link } from 'react-router-dom';
function Register_page(){

  return(
    <>
    <div className='Register_page-containter'>
        <div className='regi_title'>Register</div>
        <Link to = "/" className='previous_button'>〈</Link>
        <div className= 'regi_form'>
          <input type='text' className="regi_ID" placeholder='ID'/>
          <input type='password' className="regi_password" placeholder='Password' />
          <input type='text' className="regi_name" placeholder='Name' />
          <input type='text' className="regi_age" placeholder='Age' />
          <div className="regi_line"></div>
          <div className = "regi_btn">Register</div>
        </div>
    </div>
    <div className='Login_page_web'></div>
    </>
  )
}

export default Register_page;