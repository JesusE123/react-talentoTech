import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./route/app-router.tsx";
import { CategoryProvider } from "./context/CategoriesContext.tsx";
import { ProductProvider } from "./context/ProductsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductProvider>
      <CategoryProvider>
        <AppRouter />
      </CategoryProvider>
    </ProductProvider>
  </StrictMode>
);
