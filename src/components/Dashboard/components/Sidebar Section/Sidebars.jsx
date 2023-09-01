import React from 'react'
import './sidebar.css'

import ilham from '../../Assets/logo2.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy } from 'react-icons/bs'
import {AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOutlinePermCameraMic } from 'react-icons/md'
import {BsCreditCard2Back } from 'react-icons/bs'
import {BsQuestionCircle } from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'


function Sidebars() {
  return (
  <div className='sideBar grid'>
    <div className='logoDiv flex'>
      <img src={ilham} alt="logo" />
      <h2>Planti.</h2>
    </div>

    <div className='Menu-Div'>
      <h3 className="divTitle">
      QUICK MENU
      </h3>
      <ul className="menuList grid">

        <li className="list-Item">
          <a href="" className='menu-link flex'>
          <IoMdSpeedometer className='icon'/>
           <span className="smalltext">
            Dash Board
           </span>
          </a> 
        </li> 

        <li className="list-Item">
          <a href="" className='menu-link flex'>
          <MdDeliveryDining className='icon'/>
           <span className="smalltext">
            My Orders
           </span>
          </a> 
        </li> 

        <li className="list-Item">
          <a href="" className='menu-link flex'>
          <MdOutlineExplore className='icon'/>
           <span className="smalltext">
            Explore
           </span>
          </a> 
        </li> 

        <li className="list-Item">
          <a href="" className='menu-link flex'>
          <BsTrophy className='icon'/>
           <span className="smalltext">
              <span>roducts</span>
           </span>
          </a> 
        </li> 
      
      
      </ul>
    </div>

    <div className='Setting-Div'>
      <h3 className="divTitle">
      SETTING 
      </h3>
      <ul className="menuList grid">

        <li className="list-Item">
          <a href=" " className='menu-link flex'>
          <AiOutlinePieChart className='icon'/>
           <span className="smalltext">
              Chart
           </span>
          </a> 
        </li> 

        <li className="list-Item">
          <a href=" " className='menu-link flex'>
          <BiTrendingUp className='icon'/>
           <span className="smalltext">
            Trending
           </span>
          </a> 
        </li> 

        <li className="list-Item">
          <a href="" className='menu-link flex'>
          <MdOutlinePermCameraMic className='icon'/>
           <span className="smalltext">
            Contact
           </span>
          </a> 
        </li> 

        <li className="list-Item">
          <a href="" className='menu-link flex'>
          <BsCreditCard2Back className='icon'/>
           <span className="smalltext">
              <span className="smalltext">
              Billing
              </span>
           </span>
          </a> 
        </li> 

        <div className="logout flex">
          <BiLogIn className='icon'/> logout
        </div>
      
      
      </ul>
    </div>

    {/* side bar card */}
    <div className="sidebar-card">
      <BsQuestionCircle  className='icon'/>
      <div className="card-content">
      <div className="cirecle1"></div>
      <div className="cirecle2"></div>
      
      <h3>Help Center</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <button className="btn">Go to help center</button>
    </div>
    </div>
    </div>
    
  )
}

export default Sidebars