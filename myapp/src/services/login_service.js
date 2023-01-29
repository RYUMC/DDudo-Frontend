import { useRecoilState } from 'recoil';
import { LoginState } from '../atoms/auth_atom';

import {login_api} from '../api/login_api'

export function Login_service(data){
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  return {
    login
  }

  async function login({userID, userPassword}){
    const response = await login_api(userID, userPassword)
    localStorage.setItem('user', JSON.stringify(response));
    setIsLoggedIn(true)
    console.log(response, isLoggedIn)
  }
}