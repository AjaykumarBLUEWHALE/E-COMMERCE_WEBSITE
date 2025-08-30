
import { Link } from "react-router-dom";
import { allProducts } from "../data/Data";
export const Card = ({ item }) => {
  return (
    <div className="overflow-hidden ">
      <img
        src={item.url}
        alt={item.name}
        className="w-full  h-64 object-contain"
      />
      <div className="p-2 text-center">
        <p className="text-sm opacity-40">{item.name}</p>
        <p className="font-bold">₹{item.price}</p>
      </div>
    </div>
  )
}

const Selection = () => {
 

  return (
    <div>
      <div className="text-center font-bold text-4xl border-b-[40px] border-t-[40px] border-white ">Selection</div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 ">
        {allProducts.imgUrls.map((item) => (
       <Link key={item.id}
       to={`/product/imgUrls/${item.id}`
      }
        className="max-w-xs rounded-2xl overflow-hidden"
       >
          <Card  item={item}/>
       </Link>
        ))}

     
      </div>
    </div>
  )
}

export default Selection
