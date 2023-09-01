import React from 'react'
import './acvity.css'

// 
import img from '../../../Assets/pr3.jpg'

// import icon
import {BsArrowRightShort} from 'react-icons/bs'

function Activity() {
  return (
    <div className="activity-section">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'> 
         See all <BsArrowRightShort className='icon'/>
         </button>
      </div>

      <div className="section-container grid">
      
        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>

        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>

        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>
        
        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>
        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>
        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>
        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>
        <div className="single-custumer flex">
          
        <img src={img} alt="Customer-single" />
       
        <div className="custumer-detail flex">
            <span className="name">Justin bieber</span>
          
            <small>Ordered a new plant</small>
            </div>

        <div className="duration">
          2 min ago
        </div>
          
        </div>
      
      </div>
    </div>
  )
}

export default Activity