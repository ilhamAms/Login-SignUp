import React from 'react'
import './listing.css'

// import icon
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

// import image
import img from '../../../Assets/plant.png'
import img1 from '../../../Assets/pr1.jpg'
import img2 from '../../../Assets/pr2.jpg'
import img3 from '../../../Assets/pr3.jpg'


function Listing() {
  return (
    <div className="listing-section">
      
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See all <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="sec-container flex">
        <div className="single-item">
          <AiFillHeart  className='icon'/>
          <img src={img} alt="" />
          <h3>Annul Vince</h3>
        </div>
        <div className="single-item">
          <AiFillHeart  className='icon'/>
          <img src={img} alt="" />
          <h3>Annul Vince</h3>
        </div>
        <div className="single-item">
          <AiFillHeart  className='icon'/>
          <img src={img} alt="" />
          <h3>Annul Vince</h3>
        </div>
        <div className="single-item">
          <AiFillHeart  className='icon'/>
          <img src={img} alt="" />
          <h3>Annul Vince</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className='top-sellers'>
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
               See all <BsArrowRightShort className='icon'/>
             </button>
          </div>

          <div className="card flex">
           
            <div className="users">
              <img src={img1} alt="User Image" />
              <img src={img2} alt="User Image" />
              <img src={img3} alt="User Image" />
              <img src={img1} alt="User Image" />
            </div>

            <div className="card-text">
              <span>
                20.00 Plant sold <br/>
                <small>
                  100 Sellers 
                  <span className="date">
                    7 Days
                  </span>
                </small>
              </span>
            </div>

          </div>
        </div>

        <div className='features-sellers'>
          <div className="heading flex">
            <h3>Features Sellers</h3>
            <button className="btn flex">
               See all <BsArrowRightShort className='icon'/>
             </button>
          </div>

          <div className="card flex">
           
            <div className="users">
              <img src={img1} alt="User Image" />
              <img src={img2} alt="User Image" />
              <img src={img3} alt="User Image" />
              <img src={img1} alt="User Image" />
            </div>

            <div className="card-text">
              <span>
                20.00 Plant sold <br/>
                <small>
                  100 Sellers 
                  <span className="date">
                    7 Days
                  </span>
                </small>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Listing