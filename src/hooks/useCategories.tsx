import {useEffect, useState} from 'react'

const useCategories = () => {
    const [categories, setCategories] = useState<string[]>([])
    
  
    useEffect(() => {
        const controller = new AbortController();
    
        const fetchCategories = async () => {
          try {
           
            const res = await fetch("https://fakestoreapi.com/products/categories", {
              signal: controller.signal,
            });
            const data = await res.json();
            setCategories(data);
            
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
      
  
  
    return {categories} 
    
  
}

export default useCategories