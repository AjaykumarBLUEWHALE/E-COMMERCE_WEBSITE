import { useParams ,Link} from "react-router-dom";
import { allProducts } from "../data/Data";
import Footer from "./Footer";

function ProductPage() {
  const { category, id } = useParams();
  const product = allProducts[category].find((p) => p.id === Number(id));

  if (!product) return <h2 className="text-center text-red-500">Product not found</h2>;

  // Related products (excluding current one)
  const related = allProducts[category].filter((p) => p.id !== Number(id)).slice(0,5);

  return (
    <div className="p-6">
      <div className="flex gap-6 bg-red-200">
        <img src={product.url} alt={product.name} className="w-[30vw] h-[60vh] m-6 shadow" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

    
<div data-tooltip={product.price} className="button4">
<div className="button-wrapper4">
  <div className="text4">Buy Now</div>
    <span className="icon4">
      <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
</svg>
    </span>
  </div>
</div>


        </div>
      </div>

      {/* Related Products */}
      <h2 className="mt-10 mb-4 text-2xl font-bold text-center">Related Products</h2>
      <div className="grid grid-cols-5 gap-6">
        {related.map((item) => (
           <Link 
      key={item.id} 
      to={`/product/${category}/${item.id}`} // 👈 navigate to ProductPage
      className="max-w-xs  overflow-hidden"
    >
      <img 
        src={item.url} 
        alt={item.name} 
        className="picture  mix-blend-multiply object-cover"
      />
      <h3 className="text-center text-[15px] mt-8  text-gray-400">{item.name}</h3>
      <p className="text-black mb-1 font-bold text-[30px] text-center">{item.price}</p>
    </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default ProductPage;
