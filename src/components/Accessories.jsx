import MobileMenu from "./MobileMenu";
import data from "../data/Data";
import Footer from './Footer';
import SweatpantsCard from './SweatpantsCard';
import SizeCard from "./SizeCard";
const Accessories = () => {
    
    
  return (
     <div>
      <div className='title text-center'>ACCESSORIES</div>
              <div> 
        
    <MobileMenu/>
        <div className="grid grid-cols-1 w-[80vw] sm:left-80  left-10 relative title-box2 md:grid-cols-3 ">
   {data.accessories.map((item, index) => (
        <SweatpantsCard key={index} item={item} />
      ))}

  <div className="absolute left-[-280px] w-[18vw] z-50 ">
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

</div>

        </div>
    
        </div>
        <Footer/>
    </div>
  )
}

export default Accessories