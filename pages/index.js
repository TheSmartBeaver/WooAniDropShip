import Layout from "../components/Layout"
import client from "../components/ApolloClient"
import Product from "../components/Product"

import gql from "graphql-tag"

const PRODUCTS_QUERY = gql`
  query {
    products(first: 20) {
      nodes {
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
  }
`

const Index = (props) => {
  console.warn(props)
  const { products } = props
  return (
    <Layout>
      <div className="product-container">
        {products.length
          ? products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : ""}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const result = await client.query({ query: PRODUCTS_QUERY })

  return {
    products: result.data.products.nodes,
  }
}

export default Index
