import data from "../data/Data";
import SizeCard from "./SizeCard";
const ProductSidebar = () => {
  return (
     <div className="absolute left-[-270px] w-[18vw] z-50 ">
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
        <div className="box grid grid-cols-4 gap-1 gap-x-0 ">
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
              className={`color border-b-2 border-black w-8 aspect-square ${color} hover:border-2 hover:border-gray-500 cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
</div>

</div>
  )
}

export default ProductSidebar