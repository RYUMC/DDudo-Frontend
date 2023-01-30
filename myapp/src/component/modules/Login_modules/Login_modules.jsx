import { Link } from 'react-router-dom';
import './Login_modules.css';
import axios from 'axios';
import { Login_service } from '../../../services/login_service'
import { useEffect } from 'react';
import { IDState,PWState } from '../../../atoms/user_atom';
import { useRecoilState } from 'recoil';

export function Login_modules(){

  const [ID, setID] = useRecoilState(IDState);
  const [Password, setPassword] = useRecoilState(PWState);
  const service = Login_service();

  const onIDHandler = (event) =>
  {
    setID(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => 
  {
    setPassword(event.currentTarget.value);
  };

  const setLogin = (event) => 
  {
    event.preventDefault();
    service.login(ID, Password);
    setID("");
    setPassword("");
  };

  return(
    <form className='Login_modules-container'>
      <div className='sub-title'>To-Do-List</div>
      <div className='title'>DDudo</div>
      <input type='text' className="ID" value = {ID} onChange = {onIDHandler} placeholder='ID'/>
      <input type='password' className="Password" value = {Password} onChange = {onPasswordHandler} placeholder='Password' />
      <button type = 'submit' className='next-button' onClick={setLogin}>〉</button>
      <div className="Line"></div>
      <div className='register'>
        <Link to="/DDudo-Frontend/register" className="register-button">
          <span>회원가입</span>〉
        </Link>
      </div>
    </form>
  )
}