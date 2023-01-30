import { useRecoilState } from 'recoil';
import { LoginState } from '../atoms/auth_atom';
import { useNavigate } from 'react-router-dom';
import {login_api} from '../api/login_api'
import Swal from "sweetalert2";

export function Login_service(data){

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const navigate = useNavigate();

  const goToMain = () => 
  {
    navigate('/DDUdo-Fronted/main-page');
  };
  
  return {
    login
  }

  async function login(userID, userPassword){
    const response = await login_api(userID, userPassword);
    
    if(response.data === true)
    {
      localStorage.setItem('user', userID);
      setIsLoggedIn(true);
      console.log(response.data, isLoggedIn);
      goToMain();
      Swal.fire(`Hi ${userID}!`);
    }
    else
    {
      Swal.fire("Invalid ID, Password!");
    }
  }
}