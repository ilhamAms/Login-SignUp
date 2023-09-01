import React from 'react'
import { useState } from 'react'
import './login.css'
// link page at line 29
import { Link } from 'react-router-dom'
import Axios from 'axios'

// image, video
import vdo from '../../../src/LoginAssets/vdo1.mp4'
import logo from '../../../src/LoginAssets/lg.png'

// icon
import {FaUserShield} from'react-icons/fa'
import {BsFillShieldLockFill} from'react-icons/bs'
import {AiOutlineLogin} from'react-icons/ai'



function Login() {
  // userstate hook to store input
  const  [loginUsername, setLoginUsername] = useState('')
  const  [loginPassword, setLoginPassword] = useState('')

  const loginUser = (e) =>{
    // reaure axios to create on API that connect to the seerver 
    // install axios 

    e.preventDefault();

    Axios.post('http://localhost:3002/login', {
      // create variable to send the server through the rout
   
      LoginUsername: loginUsername,
      LoginPassword: loginPassword
      
  }).then((response)=>{
      console.log(response)
  })
  }

  return (
   
    <div className="login-page flex">
      <div className="container flex">
       
        <div className="video-div">
          <video src={vdo} ></video>

          <div className="text-div">
            <h2 className="title">
              Create And Sell Extraordinary Product
            </h2>
            <p>Adopt the paeach of nature!</p>
          </div>

          <div className="footer-div flex">
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
            <button className="btn">
              Sign Up
            </button>
            </Link>
          </div>
        </div>

        <div className="form-div flex">
          <div className="header-div">
            <img src='https://www.arsenal.com/themes/custom/arsenal_main/logo.svg' alt="" />
            <h3>Welcome back!</h3>
          </div>

          <form action="" className='form grid'>
            <span className='messages'>Login status will go here</span>
        
            <div className="input-div">
              <label htmlFor="usernamr">Username</label>
              <div className="input flex">
              <FaUserShield className='icon'/>
              <input type="text" id='username' placeholder='Enter Username'  onChange={(event)=>{
                setLoginUsername(event.target.value)
              }}/>
             </div>
            </div>

            <div className="input-div">
              <label htmlFor="password">Password</label>
              <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Enter Password'  onChange={(event)=>{
                setLoginPassword(event.target.value)
              }}/>
             </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>login</span>
              <AiOutlineLogin className='icon' />
            </button>

            <span className='forgot-password'>
              Forgot your password 
              <a href="/register">Click Here</a>
            </span>

          </form>
        </div>
     
      </div>
    </div>
  )
}

export default Login