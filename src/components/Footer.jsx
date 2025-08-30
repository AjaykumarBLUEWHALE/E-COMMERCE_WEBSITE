import React from 'react'
import Footericon from './Footericon'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <div>
     <div className='grid sm:grid-cols-3 grid-cols-1 border-t-2 border-gray-100 '>

        <div className="footer-box1  text-center shadow ">
            <h1>GET -20% OFF ON YOUR FIRST ORDER
<blockquote className="opacity-40">CODE : FRDV20</blockquote>
</h1>
        </div>
       <Link to="/"> <div className="footer-box2 shadow "><img src="https://frdv.co/_next/static/media/frdv-logo.94dea3eb660c50542ae0869ac22dc3e8.png" alt="logo" /></div></Link>
        <div className="footer-box3 text-center shadow cursor-pointer ">
            <ul className='opacity-40'><li>About</li>
            <li>CVG</li>
            <li>Contact</li>
            <li>Instagram</li>

         
           
            </ul>
              <div> <Footericon/>  </div>
        </div>
    </div>
     <div className='text-center opacity-30'>
        <h1>© 2025 FRDV</h1>
<h1>All right reserved</h1>
    </div>
   </div>

  )
}

export default Footer