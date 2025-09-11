
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Save = () => {
  return (
    <div data-aos="fade-up"
     data-aos-duration="3000">
 
          <div className='title text-center'> Wishlist</div>
          <h2 className="opacity-45 text-center text-3xl">No items in your wishlist.</h2>
          <Footer/>
  </div>
  )
}

export default Save