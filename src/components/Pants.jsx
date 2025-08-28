import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import Footer from './Footer';
import SweatpantsCard from './SweatpantsCard';
import ProductSidebar from "./ProductSidebar";
import { allProducts } from "../data/Data";
const Pants = () => {
      
  
  return (
   <div>
      <div className='title text-center'>PANTS</div>
              <div> 
        
      <MobileMenu/>
        <div className="grid grid-cols-1 w-[77vw] sm:left-70  left-10 relative title-box2 md:grid-cols-3 ">
    {allProducts.pantProducts.map((item) => (
        <Link 
          key={item.id} 
          to={`/product/pantProducts/${item.id}`}
          className="max-w-xs rounded-2xl overflow-hidden"
        >
          <img src={item.url} alt={item.name} className="picture  mix-blend-multiply object-cover"/>
          <h3 className="text-center text-[20px] mt-8  text-gray-400 ">{item.name}</h3>
          <p className="text-black mb-1 font-bold text-[30px] text-center">₹{item.price}</p>
        </Link>
      ))}

<ProductSidebar/>

        </div>
    
        </div>
        <Footer/>
    </div>
  )
}

export default Pants