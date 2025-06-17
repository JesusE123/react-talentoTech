import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductsContext";
import { toast } from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Cart from "./cart";


const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const notify = () => toast.error("Debe iniciar sesion antes de ir al carrito, presione 'Iniciar sesion' ");
  const { cart } = useProductContext();

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
            href="/"
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
          <div className="flex items-center space-x-4 rtl:space-x-reverse text-white">
            {user?.username === "admin" && (
              <button
                className="hover:opacity-55 transition cursor-pointer text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/admin")}
              >
                Panel administrador
              </button>
            )}
            <SignedOut>
              <SignInButton mode="modal">
                <button>Iniciar Sesion</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <button className="relative" onClick={navigateTocart}>
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
