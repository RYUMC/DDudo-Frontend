import { Link } from 'react-router-dom';
import './Login_modules.css'

import { Login_service } from '../../../services/login_service'

export function Login_modules(){
  const service = Login_service()

  const setLogin = () => {
    service.login("dldmstjq99", "alsxmchzh99@1")
  }
  return(
    <div className='Login_modules-container'>
      <div className='sub-title'>To-Do-List</div>
      <div className='title'>DDudo</div>
      <input type='text' className="ID" placeholder='ID'/>
      <input type='password' className="Password" placeholder='Password' />
      <Link to='/DDUdo-Fronted/main-page' className='next-button'
        onClick={
          setLogin
        }
      >〉</Link>
      <div className="Line"></div>
      <div className='register'>
        <Link to="/DDudo-Frontend/register" className="register-button">
          <span>회원가입</span>〉
        </Link>
      </div>
    </div>
  )
}