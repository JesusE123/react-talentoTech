
import Categories from "./components/categories";
import Products from "./components/products";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer theme="dark" position="bottom-right"/>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1">
          <Categories />
          <main className="flex-1 p-6 ">
            <Products />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
