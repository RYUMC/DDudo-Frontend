import { useRecoilState } from 'recoil';
import { LoginState } from '../atoms/auth_atom';
import { useNavigate } from 'react-router-dom';
import {login_api} from '../api/login_api'
import { sign_up_api } from '../api/sign_up_api';
import Swal from "sweetalert2";
import { ID_duplicate_check_api } from '../api/ID_duplicate_check_api';

export function Login_service(data){

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const navigate = useNavigate();

  return {
    login,
    sign_up,
    logout,
    id_duplicate_check
  }

  async function login(userID, userPassword){
    const response = await login_api(userID, userPassword);

    if(response.data === true)
    {
      localStorage.setItem('user', userID);
      setIsLoggedIn(true);
      console.log(response.data, isLoggedIn);
      navigate('/DDUdo-Fronted/main-page');
      Swal.fire(`Hi ${userID}!`);
    }
    else
    {
      Swal.fire("Invalid ID, Password!");
    }
  }

  async function sign_up (userID, userPassword, userName, userAge){
    const response = await sign_up_api(userID, userPassword, userName, userAge);
    console.log(response);
    navigate('/DDudo-Frontend');
  }

  async function id_duplicate_check(userID){
    const response = await ID_duplicate_check_api(userID);

    if(response.data === false)
    {
      Swal.fire("This is an available ID!");
    }
    else
    {
      Swal.fire("Duplicate ID!");
    }
    return response.data;
  }

  function logout(){
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate('/DDudo-Frontend');
  }

}