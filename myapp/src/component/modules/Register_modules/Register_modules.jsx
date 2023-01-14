import './Register_modules.css'
import { Link } from 'react-router-dom';

export function Register_modules(){
  return(
    <div className='Register_modules-containter'>
        <div className='regi_title'>Register</div>
        <Link to = "/" className='previous_button'>〈</Link>
        <div className= 'regi_form'>
          <input type='text' placeholder='ID'/>
          <input type='password' placeholder='Password' />
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Age' />
          <div className="regi_line"></div>
          <div className = "regi_btn">Register</div>
        </div>
    </div>
  )
}