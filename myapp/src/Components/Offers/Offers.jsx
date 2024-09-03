import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
       <button className='offer-latest-btn'>Check now</button>
    
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
