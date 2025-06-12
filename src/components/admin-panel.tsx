
import { useProductContext } from '../context/ProductsContext'
import { useState, useEffect } from 'react';
import SearchProducts from './search-products'
import { useNavigate } from 'react-router-dom'
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { deleteProduct, fetchProducts } from '../api/api';

const AdminPanel = () => {
    const { products, setProducts, query } = useProductContext()
    
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate()


    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetchProducts();

            if (response.error) {
                console.log(response.error)
                setProducts([]);
            } else {
                setProducts(response.data);
            }
        } catch (err) {
            // Este catch atraparía errores que no fueron capturados por la función fetchProducts
            console.error("Error inesperado al obtener productos:", err);
            console.log(err instanceof Error ? err : new Error(String(err)));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;
        const initialLoad = async () => {
            if (isMounted) {
                await getProducts();
            }
        };
        initialLoad();

        return () => {
            isMounted = false; // Cleanup: marca el componente como desmontado
        };
    }, []);

    const filterProducts = products.filter(
  (product) => product.name?.toLowerCase().includes(query.toLowerCase())
)


    const handleDelete = async (id: number) => {
        try {
            const response = await deleteProduct(id); // Call the service function

            if (response.error) {
                throw response.error;
            }

            await getProducts()
        } catch (err) {
            console.error('Failed to delete product:', err);
            alert(`Error deleting product: ${err instanceof Error ? err.message : String(err)}`);
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
                                <td className="px-4 py-2 border">{product.name}</td>

                                <td className="px-4 py-2 border">${product.price}</td>
                                <td className="px-4 py-2 border">${product.price}</td>
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