import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-gray-900 px-4">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nexus - Store</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button className='font-bold hover:opacity-55 transition text-white' onClick={() => navigate('/login')}>
                Ingresar
            </button>
        </div>
    </div>
</nav>


    </>
  )
}

export default Navbar