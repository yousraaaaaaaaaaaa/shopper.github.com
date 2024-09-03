import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const BreadCrums = (props) => {
    const {product}=props
    
  return (
    <div className='BreadCrum'>
      HOME
      <img src={arrow_icon} alt="" />
      SHOP
      <img src={arrow_icon} alt="" />
      {product.category }
      <img  src={arrow_icon} alt="" />
     <p id='prodname'> {product.name}</p> 
    </div>
  )
  
}

export default BreadCrums
