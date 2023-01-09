import { useEffect, useState } from 'react';
import '../css/Login_page_background.css'
import '../css/Login_page.css'

function Login_page(){

  return(
    <div className='Login_page_web Login_page-containter'>
      <div className='sub-title'>To-Do-List</div>
      <div className='title'>DDudo</div>
      <input type='text' className="ID" placeholder='ID'/>
      <input type='password' className="Password" placeholder='Password' />
      <div className='next-button'>〉</div>
      <div className="Line"></div>
      <div className='register'>
        <span>회원가입</span>
        <span className="register-button">〉</span>
      </div>
    </div>
  )
}

export default Login_page;