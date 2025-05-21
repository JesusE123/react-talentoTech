
import { createContext, useState, useContext } from "react";


interface CategoryContextType {
  category: string;
  setCategory: (category: string) => void;
}

// Creamos el contexto con valor inicial null
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Proveedor del contexto
export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Custom hook para usar el contexto más fácilmente
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory debe usarse dentro de un CategoryProvider");
  }
  return context;
};
