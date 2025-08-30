import { useParams ,Link} from "react-router-dom";
import React, { useState } from "react";
import { allProducts } from "../data/Data";
import Footer from "./Footer";

function ProductPage() {
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }
  const { category, id } = useParams();
  const product = allProducts[category].find((p) => p.id === Number(id));

  if (!product) return <h2 className="text-center text-red-500">Product not found</h2>;

  // Related products (excluding current one)
  const related = allProducts[category].filter((p) => p.id !== Number(id)).slice(0,5);

  return (
    <div className="p-6 ">
      <div className="max-w-xxl  productpage">
        <div className="grid grid-cols-2">
          <div>   <img src={product.url} alt={product.name} className="" /></div>
          <div>  
           <div className="flex flex-col gap-4">
<div className="flex justify-between">  <h1 className="text-3xl font-bold">{product.name}</h1> 
  <h1 className=" text-3xl font-bold text-blue-50">₹{product.price}</h1></div>
  <h2 className="text-gray-600 productInfo">{product.line}</h2>
    <h2 className="text-gray-600 productInfo">{product.line2}</h2>
      <h2 className="text-gray-600 productInfo">{product.line3}</h2>
        <h2 className="text-gray-600 productInfo">{product.line4}</h2>
          <h2 className="text-gray-600 productInfo">{product.line5}</h2>
            <h2 className="text-gray-600 productInfo">{product.line6}</h2>
              <h2 className="text-gray-600 productInfo">{product.line7}</h2>
                <h2 className="text-gray-600 productInfo">{product.line8}</h2>
               
<label htmlFor="html">Size:</label>
<select name="size" id="productSize">
    <option value="0">CHOOSE</option>
  <option value="1">L</option>
  <option value="2">M</option>
  <option value="3">S</option>
  <option value="4">XL</option>
  <option value="5">XS</option>
  <option value="6">XXL</option>
</select>
<label htmlFor="html">Color:</label>
<div className={`w-10 h-10 rounded-full ${product.faq}`}></div>
<div className="flex  gap-2">  
       <div className="flex gap-0 m-3 ">
      <button onClick={decrement} className="border w-[50px] border-gray-200 p-4 bg-gray-100">-</button>
      <h1 className="border-t-1 border-b-1 w-[50px] flex items-center justify-center border-gray-200 ">{count}</h1>
      <button onClick={increment} className="border w-[50px] border-gray-200 p-4 bg-gray-100">+</button></div>
  <div data-tooltip={product.price} className="button4 font-bold">
    <div className="button-wrapper4">
      <div className="text4">Add to cart</div>
      <span className="icon4">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart2"
          fill="currentColor"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
        </svg>
      </span>
    </div>
  </div></div>
  {/* button */}
 <div className="flex gap-2 ">
  <div className="flex gap-2">
  <div>   <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M5 5v16l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
  />
</svg> </div> <h1 className="text-xl">Wishlist</h1>
  </div>

<button class="aj-button">
  <div class="aj-icon">
    <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="aj-shere">
      <path fill="black" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram aj-icon-shere" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram aj-icon-shere" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp aj-icon-shere" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
    </svg>
  </div>
  <p>Share me</p>
</button>

 </div>
</div>

        
        
        </div>
        </div>
     
     
      </div>

      {/* Related Products */}
      <h2 className="mt-10 mb-4 text-2xl font-bold text-center">Related Products</h2>
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-6">
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
