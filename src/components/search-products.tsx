import { useProductContext } from "../context/ProductsContext";
import { CiSearch } from "react-icons/ci";

const SearchProducts = () => {
  const { setQuery } = useProductContext();
  return (
    <>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Buscar productos"
          onChange={(e) => setQuery(e.target.value)}
          className="px-2 border rounded w-full border-blue-950"
        />

        <CiSearch size={40}/>
      </div>
    </>
  );
};

export default SearchProducts;
