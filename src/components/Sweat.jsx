import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import Footer from './Footer';
import SweatpantsCard from './SweatpantsCard';
import ProductSidebar from "./ProductSidebar";
import { allProducts } from "../data/Data";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Sweat = () => {  
  return (
     <div data-aos="fade-up"
     data-aos-duration="3000">
      <div className='title text-center'>SWEATSHIRTS</div>
              <div> 
    <MobileMenu/>
       
        <div className="grid grid-cols-1 w-[77vw] sm:left-70  left-10 relative title-box2 md:grid-cols-3 ">
    {allProducts.hoodie.map((item) => (
        <Link 
          key={item.id} 
          to={`/product/hoodie/${item.id}`}
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

export default Sweat