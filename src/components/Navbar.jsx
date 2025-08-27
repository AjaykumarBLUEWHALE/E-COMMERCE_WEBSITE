import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
<nav className='grid grid-cols-7 font-bold gap-0 text-center text-white'>
    <div className="catagory "><Link to="/tshirts">TSHIRTS</Link></div>
    <div className="catagory"><Link to="/polo">POLOS</Link></div>
    <div className="catagory"><Link to="/sweat">SWEATSHIRTS</Link></div>
    <div className="catagory"><Link to="/pants">PANTS</Link></div>
    <div className="catagory"><Link to="/jacket">JACKETS</Link></div>
    <div className="catagory"><Link to="/accessories">ACCESORIES</Link></div>
    <div className="catagory"><Link to="/paradise">PARADISE&reg;</Link></div>
    <div >
<marquee className="text-center text-2xl"  behavior="scroll" direction="left">GET -20% OFF ON YOUR FIRST ORDER CODE : FRDV20</marquee>
    </div>
</nav>

    </div>
  )
}

export default Navbar