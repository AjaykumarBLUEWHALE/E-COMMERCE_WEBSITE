import React, { useState } from 'react'
import TopIcon from './TopIcon';

const IconBar = () => {
    
      const [isOpen, setIsOpen] = useState(false);
  return (
   
    <div className='flex shadow '>
        <div className='p-3 font-sans text-[19px] opacity-30 heading'>
<h1>FREE SHIPPING ON ALL ORDERS.</h1>
        </div>
        <div className='mob  ' onClick={() => setIsOpen(true)}> <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className="w-6 h-6 cursor-pointer"
>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 6h16M4 12h16M4 18h16" />
</svg>
</div>
 {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <img src='https://frdv.co/_next/static/media/frdv-logo.94dea3eb660c50542ae0869ac22dc3e8.png' alt='logo' className='h-10 w-20 invert'/>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path 
    d="M13.724,10.233L19.601,3h-2.577l-4.513,5.554L8.5,3H3.594C3.387,3.406,3.349,3.481,3.141,3.887l6.194,8.576L2.399,21h2.577	l5.571-6.857L15.5,21h4.906c0.208-0.406,0.246-0.481,0.454-0.887L13.724,10.233z" 
    fill="#DDBDA8"/>
</svg>

        </button>
        <ul>
          <li><a href="/tshirts">T-SHIRTS</a></li>
          <li><a href="/polo">POLO</a></li>
          <li><a href="sweat">SWEATSHIRTS</a></li>
          <li><a href="/pants">PANTS</a></li>
          <li><a href="/jacket">JACKETS</a></li>
          <li><a href="/accessories">ACCESSORIES</a></li>
          <li><a href="/paradise">PARADISE&reg;</a></li>
        </ul>
      </div>

<TopIcon/>
    </div>
  )
}

export default IconBar