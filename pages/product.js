import Layout from "../components/Layout"
import { withRouter } from "next/router"
import client from "../components/ApolloClient"
import gql from "graphql-tag"

const Product = withRouter((props) => {
  console.log("AHHHHH")
  //console.log(props)
  const { product } = props
  console.log("HEYY WTF ", product)
  console.log("HEYY WTF1 ", product.name)
  console.log("HEYY WTF2 ", product.image)
  return (
    <Layout>
      {product ? (
        <div className="card bg-light mb-3 p-5">
          <div className="card-header">{product.name}</div>
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <img
              src={product.image?.sourceUrl}
              alt="Product image"
              srcSet={product.image?.srcSet}
            />
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  )
})

Product.getInitialProps = async function (context) {
  console.log("yoooo")
  //console.warn("yoooo", context)
  let {
    query: { slug },
  } = context
  //On utilise l'ID de context.query.id et non pas celui du slug
  const id = slug ? slug.split("-").pop() : context.query.id
  console.log(`slugg: ${slug}`)
  console.log(`contextt: ${context}`)
  console.log(`IDD: ${id}`)

  const PRODUCT_QUERY = gql`
    query Product($id: ID!) {
      product(id: $id) {
        id
        productId
        averageRating
        slug
        description
        image {
          uri
          title
          srcSet
          sourceUrl
        }
        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          dateOnSaleFrom
          dateOnSaleTo
        }
        name
        productCategories {
          nodes {
            name
          }
        }
      }
    }
  `

  const res = await client.query({
    query: PRODUCT_QUERY,
    variables: { id: "cHJvZHVjdDoxMg==" },
  })

  //console.error("iiii ", res.data)
  console.error("iiii ")
  return {
    product: res.data.product,
  }
}

export default Product
