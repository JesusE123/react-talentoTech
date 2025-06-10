import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { product } from "../types/product";
import { motion } from "framer-motion";


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState<product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://68481b87ec44b9f3493fa61e.mockapi.io/tech/v1/Products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Cargando producto...</p>;

  return (
    <motion.div className="max-w-4xl mx-auto p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-80 object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4 capitalize">{}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">${product.price}</p>
        </div>
      </div>

      <div className="flex justify-center">
      <button className="mt-5 w-72 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate('/products')}
          >
           Volver
          </button>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
