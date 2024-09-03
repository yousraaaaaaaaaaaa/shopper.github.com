import React, { useContext, useRef, useState } from 'react' ;
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import menu_icon from '../Assets/menu_icon.png'


const Navbar2 = () => {
    const [menu,setMenu]=useState("shop")
    const {getNbCartItems}=useContext(ShopContext)
    const menuref=useRef();
    const menuToggle=(e)=>{
      menuref.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
      </div>
      <img className='nav-menu-icon' onClick={menuToggle} src={menu_icon} alt="" />
      <ul ref={menuref} className='navbar-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration : 'none'}}   to ='/'> Shop</Link>  {menu==="shop"? <hr/>: <></>} </li>
        <li onClick={()=>{setMenu("Men")}}><Link  style={{ textDecoration : 'none'}} to ='/men'> Men</Link> {menu==="Men"? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{ textDecoration : 'none'}}   to ='/women'> Women</Link>{menu==="Women"? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{ textDecoration : 'none'}}  to ='/kid'> Kids</Link> {menu==="Kids"? <hr/>: <></>}</li>
      </ul>
      <div className='navbar-login-cart'>
        <div className='signup-login-btn'>
         <Link style={{ textDecoration : 'none'}} to='/login'><button  className='login-btn'onClick={()=>{setMenu("")}} >Login</button></Link> 
         <Link  style={{ textDecoration : 'none'}} to='/signup'><button className='signup-btn' onClick={()=>{setMenu("")}} >Sign up</button></Link> 
        </div> 
        <Link style={{ textDecoration : 'none'}} to='/cart'><img src={cart_icon} alt=""  onClick={()=>{setMenu("")}}/></Link> 
        <div className="navbar-count">{getNbCartItems().toString()}
      </div>
     

      </div>
    </div>
  )
}

export default Navbar2

