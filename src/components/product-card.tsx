import type {  productSlot } from "../types/product";
import { useNavigate } from "react-router-dom";



interface productsProps {
    product:productSlot
    addToCart:(cart: productSlot) => void;
}


const ProductCard = ({ product,addToCart }:productsProps) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

    return (
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col"
      
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="font-semibold text-base mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.description}</p>
        <div className="mt-auto">
          <p className="text-lg font-bold">${product.price}</p>
          <button className="mt-2 w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
          <button className="mt-2 w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleNavigate}
          >
            Ver detalle
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  