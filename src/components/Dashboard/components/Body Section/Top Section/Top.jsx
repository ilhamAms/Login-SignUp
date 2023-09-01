import React from 'react'
import './top.css'

//import icon
import {BiSearch} from'react-icons/bi' 
import {TbMessageCircle2} from'react-icons/tb' 
import {GrNotification} from'react-icons/gr' 
import {BsArrowRightShort} from'react-icons/bs' 
import {BsQuestionCircle  } from'react-icons/bs' 
 
// import img-video
import Img from '../../../Assets/pr1.jpg'
import Img1 from '../../../Assets/plant.png'

import Vdo from '../../../Assets/vdo1.mp4'

function Top() {
  return (
    <div className="top-section">
      
      {/* Header section */}
      <div className="header-section flex">
       
        <div className="title">
          <h1>Welcome to Ams Plant .</h1>
          <p>Hello Guys Welcome back !</p>
        </div>

        <div className="search-bar flex">
          <input type="text" placeholder='Search Dashborad'/>
          <BiSearch className='icon' />
        </div>

        <div className="admin-div flex">
          <TbMessageCircle2 className='icon' />
          <GrNotification className='icon' />
          <div className="admin-image">
            <img src={Img} alt="Admin Image" />
          </div>

         
        </div>    
      </div>

      {/* card section */}
      <div className="card-section flex">
        {/* right card */}
        <div className="right-card flex">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        
        
        
        <div className="buttons flex">
          <button className="btn">Explore More..</button>
          <button className="btn transparent">
            Top Sallers
          </button>
        </div>

        <div className="video-div">
          <video src={Vdo} autoPlay loop muted>

          </video>
        </div>
      </div>
      
      {/* left card */}

      <div className="left-card flex">
        <div className="main flex">
          
          <div className="text-div">
            <h1>My stat</h1>
            <div className="flex">
            <span>Today<br/><small>- 4 Orders</small></span>
            <span>This Month<br/><small>- 500 Orders </small></span>
          </div>

          <span className="flex link">
            Go to my Orders <BsArrowRightShort  className='icon' />
          </span>
          </div>

          <div className="img-div">
            <img src={Img1} alt="" />
          </div>

      {/* use this card later */}
{/* 
      <div className="sidebar-card">
        <BsQuestionCircle  className='icon'/>
         
        <div className="card-content">
          <div className="cirecle1"></div>
          <div className="cirecle2"></div>
          
            <h3>Help Center</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <button className="btn">Go to help center</button>
      </div>
    </div> */}


   
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Top