import React from 'react'

    const SweatpantsCard = ({ item }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden">
      <img
        src={item.url}
        alt={item.name}
        className="picture  mix-blend-multiply object-cover "
      />
      <div className="px-2  py-4">
        <h2 className="text-center text-[20px] mt-8  text-gray-400 ">{item.name}</h2>
        <p className="text-black mb-1 font-bold text-[30px] text-center"> Rs.{item.price}</p>

      </div>

    </div>
  );
};

export default SweatpantsCard