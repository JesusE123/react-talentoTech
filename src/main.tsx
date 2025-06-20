import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRouter from "./route/app-router.tsx";
import { CategoryProvider } from "./context/CategoriesContext.tsx";
import { ProductProvider } from "./context/ProductsContext.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
        <ProductProvider>
          <CategoryProvider>
            <AppRouter />
          </CategoryProvider>
        </ProductProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
