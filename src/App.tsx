import { useState } from 'react'
import Navbar from './components/navbar'
import Categories from './components/categories'
import Products from './components/products'


function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-1">
          <Categories />

          <main className="flex-1 p-6 ">
            
            <Products />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
