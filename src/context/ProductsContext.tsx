
import { createContext,useContext,useState } from "react";
import type { productSlot } from "../types/product";

interface ProductsContextType {
  query:string;
  setQuery:(query:string) => void
  cart: productSlot[];                     
  setCart: (cart: productSlot[]) => void;
  updateQuantity: (productId:number, newQuantity:number) => void
  addToCart:(product:productSlot) => void;
  removeFromCart:(id:number) => void;
  products: productSlot[];
  setProducts: (product:productSlot[]) => void;
}

// Creamos el contexto con valor inicial null
const ProductContext = createContext<ProductsContextType | undefined>(undefined);

// Proveedor del contexto
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<productSlot[]>([])
  const [products, setProducts] = useState<productSlot[]>([]);

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const addToCart = (product: productSlot) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
  
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity? + 1 : 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
 

  return (
    <ProductContext.Provider value={{ query, setQuery, setCart, cart, updateQuantity, addToCart,removeFromCart, products, setProducts }}>
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
