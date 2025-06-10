import React from 'react'
import { useProductContext } from '../context/ProductsContext'
import SearchProducts from './search-products'
import NewProduct from './new-product'
import { useNavigate } from 'react-router-dom'
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

const AdminPanel = () => {
    const { products } = useProductContext()
    const navigate = useNavigate()
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
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{product.name}</td>

                                <td className="px-4 py-2 border">${product.price}</td>
                                <td className="px-4 py-2 border">${product.price}</td>
                                <td className="px-4 py-2 border">

                                    <button className="text-blue-600 hover:underline mr-2"><AiFillEdit size={25} /></button>
                                    <button className="text-red-600 hover:underline"
                                        onClick={() => console.log(product.id)}
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