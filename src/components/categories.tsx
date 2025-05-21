import useCategories from "../hooks/useCategories"
import SearchProducts from "./search-products";

const Categories = () => {
   const {categories} = useCategories();

   
  return (
    <>
     <aside className="w-64 h-min-screen bg-gray-100 border-r p-6">
      <h2 className="text-xl font-bold mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => console.log(`Categoría seleccionada: ${cat}`)}
            >
             {cat}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 mr-3">
        <SearchProducts />
      </div>
    </aside>
    </>
  )
}

export default Categories