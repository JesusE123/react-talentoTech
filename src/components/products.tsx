import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import {  toast } from "react-toastify";
import ProductCard from "./product-card";
import { useProductContext } from "../context/ProductsContext";
import Loading from "./loading";
import type { productSlot } from "../types/product";
import { useCategoryContext } from "../context/CategoriesContext";
import { fetchProducts } from "../api/api";




const Products = () => {
  const { loading } = useProducts();
  const [products, setProducts] = useState<productSlot[]>([]);
  const notify = () => toast("Producto ha sido agregado al carrito !");
  const { query, addToCart } = useProductContext();
  const {category} = useCategoryContext();

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetchProducts();
      if (res.error) {
        console.log(res.error)
      } else if (res.data) {
        setProducts(res.data);
      }
    };

    loadProducts();
  }, []);

  

  const handleToaddCart = (product:productSlot) => {
    addToCart(product)
    notify()
  }

  const filterProducts = products.filter((product) => {
  const matchesName = product.title?.toLowerCase().includes(query.toLowerCase())
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
