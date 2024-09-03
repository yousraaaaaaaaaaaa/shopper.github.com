import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom/dist'
const Item = (props) => {
    
  return (
    <div className='item'>
       
       <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.img} alt="" /></Link>

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-new-price">
                ${props.new_price}
        </div>
        <div className="item-old-price">
        ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
