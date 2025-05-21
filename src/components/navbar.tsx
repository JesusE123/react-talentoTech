import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductsContext";
import { toast } from "react-toastify";
import Cart from "./cart";

const Navbar = () => {
  const navigate = useNavigate();
  const notify = () => toast.error("Debe iniciar sesion antes de ir al carrito, presione 'Iniciar sesion' ");
  const { cart } = useProductContext();
  const user = localStorage.getItem("user");

  const navigateTocart = () => {
    if (!user) {
      notify();
      return
      
    }
    navigate("/cart");
  };

  return (
    <>
      
      <nav className="bg-white border-gray-200 dark:bg-gray-900 px-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Nexus - Store
            </span>
          </a>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              className="font-bold hover:opacity-55 transition text-white"
              onClick={() => navigate("/login")}
            >
              Iniciar sesion
            </button>
            <button onClick={navigateTocart} className="relative">
              <Cart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
