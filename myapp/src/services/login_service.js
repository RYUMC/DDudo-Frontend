import { useRecoilState } from 'recoil';
import { loginState } from '../atoms/auth_atom';
import { useNavigate } from 'react-router-dom';
import {login_api} from '../api/login_api'
// import Swal from "sweetalert2";

export function Login_service(){

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();
  
  return {
    login,
    logout
  }

  async function login(userID, userPassword){
    const response = await login_api(userID, userPassword);
    console.log(response)
    if(response === true)
    {
      localStorage.setItem('user', userID);
      setIsLoggedIn(true);
      console.log(response, isLoggedIn);
      navigate('/DDUdo-Fronted/main');
      // Swal.fire(`Hi ${userID}!`);
    }
    else
    {
      // Swal.fire("Invalid ID, Password!");
    }
  }

  function logout(){
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate('/DDudo-Frontend')
  }
}