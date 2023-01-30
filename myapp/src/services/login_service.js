import { selector, useRecoilState } from 'recoil';
import { loginState } from '../atoms/auth_atom';

import {login_api} from '../api/login_api'

export function Login_service(){
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  return {
    login,
    register
  }

  async function login(userID, userPassword){
    const response = await login_api(userID, userPassword)
    localStorage.setItem('user', JSON.stringify(response));
    setIsLoggedIn(localStorage.getItem('user'))
  }

  async function register(){

  }
}