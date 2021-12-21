import Layout from "../components/Layout"
import { withRouter } from "next/router"
import client from "../components/ApolloClient"
import gql from "graphql-tag"

const Product = withRouter((props) => {
  return <div></div>
})

Product.getInitialProps = async function (context) {
  console.warn(context)
  let {
    query: { slug },
  } = context
  const id = slug ? parseInt(slug.split("-").pop()) : context.query.id

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
    variables: { id: "cHJvZHVjdDoxNQ==" },
  })

  console.error(res.data)
  return {
    product: res.data.product,
  }
}

export default Product
