import "./Register_modules.css";
import { Link } from "react-router-dom";
import React from "react";
import { Login_service } from "../../../services/login_service";
import { useState } from "react";
import Duplicate_check from '../../../assets/duplicate_check.png'

export function Register_modules() {

  const [isDuplicate, setIsDuplicate] = useState(true);
  const [ID, setID] = useState('');
  const [Password, setPassword] = useState('');
  const [Name,setName] = useState('');
  const [Age,setAge] = useState('');

  const onIDHandler = (event) =>
  {
    setID(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => 
  {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) =>
  {
    setName(event.currentTarget.value);
  };

  const onAgeHandler = (event) =>
  {
    setAge(event.currentTarget.value);
  };

  const service = Login_service();

  const setDuplicateCheck = () => 
  {
    service.id_duplicate_check(ID).then( (data) => setIsDuplicate(data));
  };

  const setSignUp = (event) => 
  {
    event.preventDefault();
    service.sign_up(ID, Password, Name, Age);
    setID("");
    setPassword("");
    setName("");
    setAge("");
  };

  return (
    <div className="Register_modules-containter">
      <div className="regi_title">Register</div>
      <Link to="/DDudo-Frontend" className="previous_button">〈</Link>
      <form className="regi_form">
        <input type="text" value = {ID} onChange = {onIDHandler}placeholder="ID"/>
        <img src = {Duplicate_check} className="duplicate_check_button" onClick={setDuplicateCheck}/>
        <input type="password" value = {Password} onChange = {onPasswordHandler} placeholder="Password" />
        <input type="text" value = {Name} onChange = {onNameHandler} placeholder="Name" />
        <input type="text" value = {Age} onChange = {onAgeHandler} placeholder="Age" />
        <div className="regi_line"></div>
        <button className="regi_btn" disabled = {isDuplicate} onClick= {setSignUp}>Register</button>
      </form>
    </div>
  );
}
