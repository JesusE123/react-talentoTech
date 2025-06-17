import { useState, useEffect } from "react";

import { useProductContext } from "../context/ProductsContext";
import { fetchProducts } from "../api/api";

const useProducts = () => {
  const { products, setProducts } = useProductContext()
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        setLoading(true);
        const { data } = await fetchProducts();

        if (isMounted && data) {
          setProducts(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) setLoading(false);
        console.error("Error al obtener productos:", error);
      }
    };
    getProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading };
};

export default useProducts;
