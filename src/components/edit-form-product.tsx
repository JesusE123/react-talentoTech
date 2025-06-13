import { useState, useEffect } from 'react'
import { useForm, type SubmitHandler } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom'
import type { product } from '../types/product';
import { doEditProduct } from '../api/api';
import supabase from '../utils/supabase';

interface Products {
    id: number
    title: string,
    price: string,
    description: string,
    category: string
    image: FileList | string
}


const EditFormProduct = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState<product | null>(null);
    const { register, handleSubmit, formState: { isSubmitting }, setValue } = useForm<Products>();
    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq("id", id)
                .single(); // traer solo un producto

            if (error) {
                console.error("Error fetching product:", error.message);
                return;
            }

            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        if (product) {
            setValue("id", product.id);
            setValue("title", product.title);
            setValue("price", product.price);
            setValue("description", product.description);
            setValue("image", product.image);



        }
    }, [product, setValue]);

    const onSubmit: SubmitHandler<Products> = (data) => {
        doEditProduct(data.id, data)
        navigate("/admin")
    };

    return (
        <>
            <div className='p-8'>
                <h2 className='text-center text-2xl font-bold'>Editar el producto</h2>
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
                            htmlFor="floating_email"
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
                            {/* <input
                                type="text"
                                {...register("category")}
                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Categoria
                            </label> */}
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {isSubmitting ? "Editando" : "Editar producto"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default EditFormProduct