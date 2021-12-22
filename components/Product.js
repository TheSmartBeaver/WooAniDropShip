import Link from "next/dist/client/link"
import AddToCartButton from "./cart/AddToCartButton"

const Product = (props) => {
  const { product } = props
  return (
    <div className="card border-primary mb-3" style={{ "max-width": "20em" }}>
      <div className="card-header">{product.name}</div>
      <div className="card-body">
        <Link
          as={`lol-c-masqué`}
          href={`/product?slug=${product.slug}-${product.productId}-${product.id}`}
        >
          <a>
            <h4 className="card-title"></h4>
            <img src={product.image.sourceUrl} alt="lol" />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: product.price }}
            ></div>
          </a>
        </Link>
        <div className="card-body text-center">
          <AddToCartButton product={ product }/>
        </div>
      </div>
    </div>
  )
}

export default Product
