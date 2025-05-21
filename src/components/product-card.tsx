import type { product } from "../types/product";

interface productsProps {
    product:product
}


const ProductCard = ({ product }:productsProps) => {
    return (
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="font-semibold text-base mb-2">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        <div className="mt-auto">
          <p className="text-lg font-bold">${product.price}</p>
          <button className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  