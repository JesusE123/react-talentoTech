import useProducts from "../hooks/useProducts";
import {  toast } from "react-toastify";
import ProductCard from "./product-card";
import { useProductContext } from "../context/ProductsContext";
import Loading from "./loading";
import type { productSlot } from "../types/product";



const Products = () => {
  const { products, loading } = useProducts();
  const notify = () => toast("Producto ha sido agregado al carrito !");
  const { query, addToCart } = useProductContext();

  const handleToaddCart = (product:productSlot) => {
    addToCart(product)
    notify()
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={handleToaddCart}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
