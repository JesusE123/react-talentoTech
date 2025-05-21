import {useState,useEffect} from 'react'
import type { product } from '../types/product';

const useProducts = () => {
    const [products, setProducts] = useState<product[]>([])
     useEffect(() => {
            const controller = new AbortController();
        
            const fetchCategories = async () => {
              try {
                const res = await fetch("https://fakestoreapi.com/products", {
                  signal: controller.signal,
                });
                const data = await res.json();
                setProducts(data);
              } catch (error) {
               console.log(error)
              }
            };
        
            fetchCategories();
        
            // Cleanup: abort request on unmount
            return () => {
              controller.abort();
            };
          }, []);
          
  return {products}
}

export default useProducts