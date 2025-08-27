import React, { useState } from 'react'
import data from "../data/Data";
import SizeCard from './SizeCard';
const MobileMenu = () => {
          const [isOpen, setIsOpen] = useState(false);

  return (
      <div className='flex gap-4 items-end justify-end  mr-[200px]'>

            <h1 className="filter-heading">Showing 1 to 24 of 24 products</h1>
         
<div className="filter-div transition-transform duration-300"  onClick={() => setIsOpen(true)} ><button title="filter" class="filter ">
  <svg viewBox="0 0 512 512" height="1em">
    <path
      d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
    ></path>
  </svg>
</button></div> {/*overlay*/}
  <div 
        className={`overlay2 ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
 {/* Sidebar */}
      <div className={`sidebar2 ${isOpen ? "open" : ""}`}>
       
        <button className="close-btn2 " onClick={() => setIsOpen(false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path 
    d="M13.724,10.233L19.601,3h-2.577l-4.513,5.554L8.5,3H3.594C3.387,3.406,3.349,3.481,3.141,3.887l6.194,8.576L2.399,21h2.577	l5.571-6.857L15.5,21h4.906c0.208-0.406,0.246-0.481,0.454-0.887L13.724,10.233z" 
    fill="black"/>
</svg>

        </button>
      <div className="side ">
  <h1>Categories
</h1>
<h2 className="opacity-45">Diamond<br/> strawberry T-Shirt</h2>
 </div>
  <div className="side">
  <h1>SIZE</h1>
 
<div className="container">
{data.size.map((items,index)=>(
  <SizeCard key={index} items={items}/>
))}
</div>
 </div>
   <div className="side">
        <h1 className="font-semibold">Colours</h1>
        <div className="box grid grid-cols-4 gap-1 gap-x-0">
          {[
            "bg-black",
            "bg-blue-500",
            "bg-green-400",
            "bg-yellow-900",
            "bg-orange-200",
            "bg-green-950",
            "bg-purple-200",
            "bg-blue-900",
            "bg-amber-600",
            "bg-purple-400",
            "bg-red-300",
            "bg-red-400",
            "bg-white",
            "bg-red-800",
            "bg-yellow-500",
          ].map((color, index) => (
            <div
              key={index}
              className={`color w-8 aspect-square ${color} hover:border-2 hover:border-gray-500 cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
      </div>
            <select name="dropdownMenu" id="menu" className='border border-gray-300 '>
                <option value="latest">LATEST</option>
                <option value="low">PRICE LOW</option>
                <option value="high">PRICE HIGH</option>
                <option value="discount">DISCOUNT</option>
            </select>
         </div>
  )
}

export default MobileMenu