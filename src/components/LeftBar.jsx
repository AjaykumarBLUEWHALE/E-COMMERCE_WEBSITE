import React from 'react'
import data from "../data/Data";
const LeftBar = () => {
  return (
    <div>
        <div className='left-bar'>
 <div className="side ">
  <h1>Categories
</h1>
<h2 className="opacity-45">Diamond strawberry t-shirt</h2>
 </div>
 <div className="side">
  <h1>SIZE</h1>
 
<div className="container">
{data.size.map((items,index)=>(
  <SizeCard key={index} items={items}/>
))}
</div>
 </div>
 <div className="side">  <h1>Colours
</h1>
<div className="box grid grid-cols-4 gap-2">
<div className="color w-8 aspect-square  bg-black  hover:border-2 hover:border-gray-500 "> </div>
<div className="color w-8 aspect-square bg-blue-500 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-green-400 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-yellow-900 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-orange-200 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-green-950 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-purple-200 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-blue-900 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-amber-600 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-purple-400 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-red-300 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-red-400 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-white hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-red-800 hover:border-2 hover:border-gray-500"> </div>
<div className="color w-8 aspect-square bg-yellow-500 hover:border-2 hover:border-gray-500"> </div>
</div>
</div>
</div>
    </div>
  )
}

export default LeftBar