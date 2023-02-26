import { errorSelector, useRecoilState, useResetRecoilState } from 'recoil';
import { loginState } from '../atoms/auth_atom';
import { useNavigate } from 'react-router-dom';
import {login_api, ID_duplicate_check_api, sign_up_api} from '../api/login_api';
import Swal from "sweetalert2";

export function Login_service(){

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();
  
  return {
    login,
    logout,
    id_duplicate_check,
    sign_up
  }

  async function login(userID, userPassword){
    const response = await login_api(userID, userPassword);
    if(response === true){
      localStorage.setItem('user', userID);
      setIsLoggedIn(true);
      navigate('/DDudo-Frontend/main');
      Swal.fire(`Hi ${userID}!`);
    }
    else{
      Swal.fire("Invalid ID, Password!");
    }
  }

  function logout(){
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate('/DDudo-Frontend')
  }

  async function id_duplicate_check(userID){
    if(userID === ""){
      Swal.fire("Enter your ID!");
      return true;
    }
    const response = await ID_duplicate_check_api(userID);
    if(response === false){
      Swal.fire("This is an available ID!");
    }
    else{
       Swal.fire("Duplicate ID!");
    }
    return response;
  }

  async function sign_up (userID, userPassword, userName, userAge){
    const response = await sign_up_api(userID, userPassword, userName, userAge);
    console.log(response);
    Swal.fire("Successfully registered as a member!");
    setTimeout(()=> {
      navigate("/DDudo-Frontend");
    }, 2000);
  }
}