
import { createContext,useContext,useState } from "react";
import type { product } from "../types/product";

interface ProductsContextType {
  query:string;
  setQuery:(query:string) => void
  cart: product[];                     
  setCart: (cart: product[]) => void;
}

// Creamos el contexto con valor inicial null
const ProductContext = createContext<ProductsContextType | undefined>(undefined);

// Proveedor del contexto
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<product[]>([])
 

  return (
    <ProductContext.Provider value={{ query, setQuery, setCart, cart }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook para usar el contexto más fácilmente
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext debe usarse dentro de un CategoryProvider");
  }
  return context;
};
