import { Link } from 'react-router-dom';
import './Login_modules.css'

export function Login_modules(){
  return(
    <div className='Login_modules-container'>
      <div className='sub-title'>To-Do-List</div>
      <div className='title'>DDudo</div>
      <input type='text' className="ID" placeholder='ID'/>
      <input type='password' className="Password" placeholder='Password' />
      <div className='next-button'>〉</div>
      <div className="Line"></div>
      <div className='register'>
        <span>회원가입</span>
        <Link to="/register" className="register-button">〉</Link>
      </div>
    </div>
  )
}