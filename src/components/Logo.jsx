import React from 'react'
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/">    
      <img src="https://frdv.co/_next/static/media/frdv-logo.94dea3eb660c50542ae0869ac22dc3e8.png" 
    alt="logo" className='logo '/></Link>
  </div>
  )
}

export default Logo