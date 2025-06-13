
import { useProductContext } from '../context/ProductsContext'
import { useState, useEffect } from 'react';
import SearchProducts from './search-products'
import { useNavigate } from 'react-router-dom'
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { deleteProduct, fetchProducts } from '../api/api';

const AdminPanel = () => {
    const { products, setProducts, query } = useProductContext()
    const [reload, setReload] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetchProducts();
            if (res.error) {
                console.log(res.error)
            } else if (res.data) {
                setProducts(res.data);
            }
        };

        loadProducts();
    }, [reload]);

    const filterProducts = products.filter(
        (product) => product.title?.toLowerCase().includes(query.toLowerCase())
    )


    const handleDelete = async (id: number) => {
        try {
            const { success, error } = await deleteProduct(id);

            if (error || !success) {
                throw error ?? new Error("No se pudo eliminar el producto.");
            }

             setReload(prev => !prev);
        } catch (err) {
            console.error("Failed to delete product:", err);
            alert(
                `Error al eliminar producto: ${err instanceof Error ? err.message : String(err)
                }`
            );
        }
    };

    return (
        <>
            <div className='p-8 flex flex-col space-y-3 justify-center items-center '>
                <h2 className='text-2xl font-bold'>Administracion de productos</h2>
                <div className='flex justify-end w-full space-x-4'>
                    <SearchProducts />
                    <button
                        onClick={() => navigate("/products/new")}
                        className='bg-gray-900  px-4 py-2  rounded p-2 text-white font-semibold cursor-pointer hover:opacity-55'>
                        Nuevo producto
                    </button>
                </div>


                <table className="min-w-full table-auto border-2 border-gray-300 text-sm text-left text-gray-700 overflow-auto">
                    <thead className="bg-gray-100 text-gray-800 uppercase">
                        <tr>
                            <th className="px-4 py-2 border">Nombre</th>
                            <th className="px-4 py-2 border">Precio</th>
                            <th className="px-4 py-2 border">Categoria</th>
                            <th className="px-4 py-2 border">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{product.title}</td>

                                <td className="px-4 py-2 border">${product.price}</td>
                                <td className="px-4 py-2 border">{product.category}</td>
                                <td className="px-4 py-2 border">

                                    <button onClick={() => navigate(`/product/edit/${product.id}`)} className="text-blue-600 hover:underline mr-2"><AiFillEdit size={25} /></button>
                                    <button className="text-red-600 hover:underline"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <AiOutlineDelete size={25} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <button className="mt-5 w-72 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={() => navigate('/products')}
                >
                    Volver
                </button>
            </div>
        </>
    )
}

export default AdminPanel