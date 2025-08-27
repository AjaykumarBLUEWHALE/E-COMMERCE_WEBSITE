import React from 'react'

    const SweatpantsCard = ({ item }) => {
  return (
  <div>   <Link 
          key={item.id} 
          to={`/product/tshirts/${item.id}`}
          className="max-w-xs  overflow-hidden"
        >
          <img src={item.url} alt={item.name} className="picture  mix-blend-multiply object-cover"/>
          <h3 className="text-center text-[20px] mt-8  text-gray-400 ">{item.name}</h3>
          <p className="text-black mb-1 font-bold text-[30px] text-center">₹{item.price}</p>
        </Link></div>
  );
};

export default SweatpantsCard