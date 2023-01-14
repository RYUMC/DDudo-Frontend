import { useEffect, useState } from 'react';
import '../css/Login_page_background.css'
import '../css/Login_page.css'
import { Link } from 'react-router-dom';

function Login_page(){

  return(
    <>
      <div className='Login_page-containter'>
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
      <div className='Login_page_web'></div>
    </>
  )
}

export default Login_page;