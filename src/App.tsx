
import Categories from "./components/categories";
import Products from "./components/products";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

function App() {
  return (
    <>
    <ToastContainer theme="dark" position="bottom-right"/>
      <div className="min-h-screen flex flex-col">
        <motion.div className="flex flex-1" 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.4 }}
        >
          <Categories />
          <main className="flex-1 p-6 ">
            <Products />
          </main>
        </motion.div>
      </div>
    </>
  );
}

export default App;
