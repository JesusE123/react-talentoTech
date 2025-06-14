
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 px-8">
                <div className="grid min-h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">La tienda con los mejores productos del mercado</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Para ver la seccion de los productos, presione en ver productos, para poder realizar la compra debera loguearse con anterioridad en la seccion de "Iniciar sesion"</p>
                        <button className="flex text-white shadow-lg p-4 rounded ring-white"
                        onClick={()=> navigate("/products")}
                        >
                           Ver Productos
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                       </button>
                        
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/public/hero.png" alt="mockup" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection