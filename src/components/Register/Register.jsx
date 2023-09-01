import React, {useState} from 'react'
import './register.css'
// link page at line 29
import { Link,  } from 'react-router-dom'

// image, video
import vdo from '../../../src/LoginAssets/vdo1.mp4'


// icon
import {FaUserShield} from'react-icons/fa'
import {BsFillShieldLockFill} from'react-icons/bs'
import {AiOutlineLogin} from'react-icons/ai'
import {AiOutlineMail} from'react-icons/ai'
import Axios from 'axios'


function register() {
// use state to hold input
  const  [email, setEmail] = useState('')
  const  [username, setUsername] = useState('')
  const  [password, setPassword] = useState('')

  // onclick let get what user has entered 
  const createUser = () =>{
    // reaure axios to create on API that connect to the seerver 
    // install axios 

    Axios.post('http://localhost:3002/register', {
      // create variable to send the server through the rout
      Email: email,
      Username: username,
      Password: password
  }).then(()=>{
    console.log('user has been created')
  })
  }
  return (
   
    <div className="register-page flex">
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
            <span className="text"> Have an account?</span>
            <Link to={'/'}>
            <button className="btn">
              Sign in
            </button>
            </Link>
          </div>
        </div>

        <div className="form-div flex">
          <div className="header-div">
            <img src='https://www.arsenal.com/themes/custom/arsenal_main/logo.svg' alt="" />
            <h3>Let Us Know You</h3>
          </div>

          <form action="" className='form grid'>
         
        
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <div className="input flex">
              <AiOutlineMail className='icon'/>
              <input type="email" id='email' placeholder='Enter Email' 
              onChange={(event)=>{
                setEmail(event.target.value)
              }}/>
             </div>
            </div>

            <div className="input-div">
              <label htmlFor="usernamr">Username</label>
              <div className="input flex">
              <AiOutlineLogin className='icon'/>
              <input type="text" id='username' placeholder='Enter Username'
                 onChange={(event)=>{
                  setUsername(event.target.value)
                }}/>
             </div>
            </div>

            <div className="input-div">
              <label htmlFor="usernamr">Password</label>
              <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Enter Password'
                 onChange={(event)=>{
                  setPassword(event.target.value)
                }}/>
             </div>
            </div>

            <button type='submit' className='btn flex'
            onClick={createUser}
            >
              <span>Register</span>
              <AiOutlineLogin className='icon' />
            </button>

            <a href="/dashboard">dash</a>

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

export default register