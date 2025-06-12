import useProducts from "../hooks/useProducts";
import {  toast } from "react-toastify";
import ProductCard from "./product-card";
import { useProductContext } from "../context/ProductsContext";
import Loading from "./loading";
import type { productSlot } from "../types/product";
import { useCategoryContext } from "../context/CategoriesContext";


const Products = () => {
  const { products, loading } = useProducts();
 
  const notify = () => toast("Producto ha sido agregado al carrito !");
  const { query, addToCart } = useProductContext();
  const {category} = useCategoryContext();
  

  const handleToaddCart = (product:productSlot) => {
    addToCart(product)
    notify()
  }

  const filterProducts = products.filter((product) => {
  const matchesName = product.name?.toLowerCase().includes(query.toLowerCase())
  const matchesCategory = !category || product.category === category
  return matchesName && matchesCategory
})


  if (loading) return <Loading />;

  return (
    <>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filterProducts.map((product) => (
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
