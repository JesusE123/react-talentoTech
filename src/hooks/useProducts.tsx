import { useState, useEffect } from "react";
import type { productSlot } from "../types/product";
import { useCategoryContext } from "../context/CategoriesContext";
import { useProductContext } from "../context/ProductsContext";

const useProducts = () => {
  const {products, setProducts} = useProductContext()
  const [loading, setLoading] = useState<boolean>(false);
  const { category } = useCategoryContext();
  const url = "https://68481b87ec44b9f3493fa61e.mockapi.io/tech/v1/Products";



  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);


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
