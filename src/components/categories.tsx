
import SearchProducts from "./search-products";
import { useCategoryContext } from "../context/CategoriesContext";
import useCategories from "../hooks/useCategories";



const Categories = () => {
   const {categories} = useCategories()
   const {setCategory} = useCategoryContext()

 
  return (
    <>
     <aside className="w-64 h-min-screen bg-gray-100 border-r p-6">
      <h2 className="text-xl font-bold mb-4">Categorías</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className="w-full text-left py-2 px-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => setCategory(cat)}
            >
             {cat}
            </button>
          </li>
        ))}
      </ul>

      <button className="w-full text-left py-2 px-2 rounded-lg hover:bg-gray-200 transition mt-3"
      onClick={() => setCategory("")}
      >
        todos
      </button>

      <div className="mt-8 mr-3">
        <SearchProducts />
      </div>
    </aside>
    </>
  )
}

export default Categories