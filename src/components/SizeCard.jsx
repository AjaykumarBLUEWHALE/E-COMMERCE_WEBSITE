import React from 'react'

           const SizeCard=({items})=>{
  return(
    <div className=" items-start justify-start gap-2">
      <label>
    <input type="checkbox" class="input"  id={`size-${items.fit}`}/>
    <span class="custom-checkbox"></span>
  </label>

     <label
          htmlFor={`size-${items.fit}`}   // label points to the right input
          className="text-black text-[20px] cursor-pointer"
        >
          {items.fit}
        </label>
  
    </div>
  )
  };

export default SizeCard