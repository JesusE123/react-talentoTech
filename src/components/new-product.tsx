import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { doCreateProduct } from "../api/api";
import useCategories from "../hooks/useCategories";

interface Products {
    id: number
    title: string,
    price: string,
    description: string,
    category: string
    image: FileList
}


const NewProduct = () => {
    const { categories } = useCategories();
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<Products>();
    const navigate = useNavigate()





    const onSubmit: SubmitHandler<Products> = async (data) => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("category", data.category);

        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }

        await doCreateProduct(formData); // 👈 ahora sí se envía el FormData
        navigate("/admin");
    };

    return (
        <>
            <div className='p-8'>
                <h2 className='text-center text-2xl font-bold'>Nuevo producto</h2>
                <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            className="block py-2.5 px-0 text-sm w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            {...register("title")}
                        />
                        <label

                            className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nombre del producto
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            {...register("price")}
                            className="block py-2.5 px-0 text-sm w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Precio
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            {...register("description")}
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0  border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Descripcion
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <select
                                {...register("category")}
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                            >
                                <option value="">Selecciona una categoría</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Categoria
                            </label>
                        </div>



                    </div>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" {...register("image")} />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help
                    "

                    >SVG, PNG, JPG .</p>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {isSubmitting ? "Creando..." : "Crear nuevo producto"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default NewProduct