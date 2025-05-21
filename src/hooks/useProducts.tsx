import { useState, useEffect } from "react";
import type { product } from "../types/product";
import { useCategoryContext } from "../context/CategoriesContext";

const useProducts = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { category } = useCategoryContext();
  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products";

        const res = await fetch(url);
        const data = await res.json();

        if (isMounted) {
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) setLoading(false); 
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { products, loading };
};

export default useProducts;
