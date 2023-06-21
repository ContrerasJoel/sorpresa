import type { Products } from "@/interfaces/interfaces"
import ProductCard from "./ProductCard"

const ProductBox = ({ products }: Products) => {
  return (
    <div className="product_box__container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          status={product.status}
          title={product.title}
          images={product.images}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductBox
