import MobileMenu from "./MobileMenu";
import data from "../data/Data";
import Footer from './Footer';
import SweatpantsCard from './SweatpantsCard';

import ProductSidebar from "./ProductSidebar";
const Para = () => {
  return (
     <div>
      <div className='title text-center'>PARADISE</div>
      <MobileMenu/>
            <div className="grid grid-cols-1 w-[77vw] sm:left-70  left-10 relative title-box2 md:grid-cols-3 ">
   {data.para.map((item, index) => (
        <SweatpantsCard key={index} item={item} />
      ))}

<ProductSidebar/>

        </div>
    <Footer/>
    </div>
  )
}

export default Para