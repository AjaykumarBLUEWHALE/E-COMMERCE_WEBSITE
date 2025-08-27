import React from 'react'
import { imgUrls } from '../data/Data'
export const Card = ({ items }) => {
  return (
    <div className="overflow-hidden ">
      <img
        src={items.url}
        alt={items.sub}
        className="w-full  h-64 object-contain"
      />
      <div className="p-2 text-center">
        <p className="text-sm opacity-40">{items.sub}</p>
        <p className="font-bold">{items.price}</p>
      </div>
    </div>
  )
}

const Selection = () => {
 

  return (
    <div>
      <div className="text-center font-bold text-4xl border-b-[40px] border-t-[40px] border-white ">Selection</div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 ">
        {imgUrls.map((items, index) => (
          <Card key={index} items={items} />
        ))}
      </div>
    </div>
  )
}

export default Selection
