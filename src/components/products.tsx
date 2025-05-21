import useProducts from "../hooks/useProducts"
import Cart from "./cart"
import ProductCard from "./product-card"

const Products = () => {
  const {products} = useProducts()
  return (
    <>
    <Cart />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  </>
  )
}

export default Products