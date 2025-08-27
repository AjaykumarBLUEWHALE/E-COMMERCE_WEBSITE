import { useParams ,Link} from "react-router-dom";
import { allProducts } from "../data/Data";

function ProductPage() {
  const { category, id } = useParams();
  const product = allProducts[category].find((p) => p.id === Number(id));

  if (!product) return <h2 className="text-center text-red-500">Product not found</h2>;

  // Related products (excluding current one)
  const related = allProducts[category].filter((p) => p.id !== Number(id));

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <img src={product.url} alt={product.name} className="w-72 h-72 object-cover rounded-xl shadow" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl mt-2">{product.price}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl">Add to Cart</button>
        </div>
      </div>

      {/* Related Products */}
      <h2 className="mt-10 mb-4 text-2xl font-bold">Related Products</h2>
      <div className="grid grid-cols-4 gap-6">
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
      <h3 className="text-center text-[20px] mt-8  text-gray-400">{item.name}</h3>
      <p className="text-black mb-1 font-bold text-[30px] text-center">{item.price}</p>
    </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
