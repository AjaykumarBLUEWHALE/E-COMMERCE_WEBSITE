import MobileMenu from "./MobileMenu";
import data from "../data/Data";
import Footer from './Footer';
import SweatpantsCard from './SweatpantsCard';

import ProductSidebar from "./ProductSidebar";
const Pants = () => {
      
  
  return (
   <div>
      <div className='title text-center'>PANTS</div>
              <div> 
        
      <MobileMenu/>
        <div className="grid grid-cols-1 w-[77vw] sm:left-70  left-10 relative title-box2 md:grid-cols-3 ">
   {data.pantProducts.map((item, index) => (
        <SweatpantsCard key={index} item={item} />
      ))}

<ProductSidebar/>

        </div>
    
        </div>
        <Footer/>
    </div>
  )
}

export default Pants