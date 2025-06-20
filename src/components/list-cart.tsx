import { useProductContext } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

const ListCart = () => {
  const { cart, updateQuantity, removeFromCart } = useProductContext();
  const navigate = useNavigate();



  return (

    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Tu carrito de compra
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map((product) => (
                <li className="flex items-center gap-4" key={product.id}>
                  <img
                    src={
                      product.image instanceof FileList
                        ? URL.createObjectURL(product.image[0])
                        : product.image
                    }
                    alt=""
                    className="size-16 rounded-sm object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{product.title}</h3>

                    <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                      <span>{product.description}</span>
                    </dl>
                  </div>

                  <div>
                    <dl className="text-[14px] text-gray-600 font-semibold">
                      <span>{product.price}$</span>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line1Qty" className="sr-only">
                        {" "}
                        {product.quantity}
                      </label>

                      <input
                        type="number"
                        onChange={(e) =>
                          updateQuantity(
                            product.id,
                            parseInt(e.target.value) || 1
                          )
                        }

                        value={product.quantity}
                        id="Line1Qty"
                        className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button className="text-gray-600 transition hover:text-red-600"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t-2 border-gray-900 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>
                      {cart
                        .reduce((acc, item) => {
                          console.log("item:", item);
                          return acc + parseInt(item.price) * item.quantity!;
                        }, 0)
                        .toFixed(2)}
                      $
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end space-x-2">
                  <button className="mt-5 w-72 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    
                  >
                    Comprar
                  </button>
                  <button className="mt-5 w-72 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => navigate('/products')}
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCart;
