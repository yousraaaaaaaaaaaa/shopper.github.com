import React from 'react'
import './Css/LoginSignup.css'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const  navigate=useNavigate();
    const handlechange=()=>{
        navigate('/login')
    }
 
      return (
    <div className='loginsingup'>
    <div className="loginsignup-container">
      <h1>Sing up</h1>
      <div className="loginsignup-fields">
      <input type="text" placeholder='Your First name ' />
      <input type="text" placeholder='Your Last name ' />
      <input type="email" placeholder='Your email' />
      <input type="password"  placeholder='Password'/>
      <input type="password"  placeholder='Verify Password'/>
      </div>
     <button>Register</button>
     <div className='loginsignup-login'>
      <p>Already have an account ? <span onClick={handlechange}>login here</span></p>

     </div>
     <div className="loginsignup-agree">
      <input type="checkbox"  name='' id=''/>
      <p> By continuing i agree to the terms of use and privacy policy </p>
     </div>
    </div>
      
    </div>
  )
}

export default Signup
