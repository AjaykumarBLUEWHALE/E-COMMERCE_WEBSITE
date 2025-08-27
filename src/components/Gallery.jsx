import React from 'react'


const Gallery = () => {
  return (
    <div className=' grid sm:grid-cols-2 grid-cols-1 gallery'>
        <div className="main-grid   ">
            <div className="right-grid items-center"><img src="./cap.jpeg" alt="url" className='sm:h-[500px] sm:w-[800px] ' /></div>
           
        </div>
        <div className=" grid grid-rows-2 gap-4 gallery-grid ">

            <div className="row-grid "><img src="./card.jpeg" alt="card" className='sm:h-[220px] sm:w-[800px]'/></div>
            <div className="row-grid  "><img src="./modal.jpeg" alt="modal" className='sm:h-[220px] sm:w-[800px] '/></div>
             
        </div>
         <div className="right-text text-center">Instagram.</div>
            <div className="right-text text-center">Facebook.</div>
    </div>
  )
}

export default Gallery