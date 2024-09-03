import React from 'react'
import './Css/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const handlechange=()=>{
    navigate('/signup');
  }
  return (
    <div className='loginsingup'>
    <div className="loginsignup-container">
      <h1>Log in</h1>
      <div className="loginsignup-fields">
      <input type="text" placeholder='Your name ' />
      <input type="email" placeholder='Your email' />
      <input type="password"  placeholder='Password'/>
      </div>
     <button>Log in</button>
     <div className='loginsignup-login'>
      <p>You don't have an account ? <span onClick={handlechange}>sign up</span></p>

     </div>
    
    </div>
      
    </div>
  )
}

export default Login;
