import Link from "next/link"
import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { addFirstProduct } from "../../function"

const AddToCartButton = (props) => {
  const { product } = props
  const { cart, setCart } = useContext(AppContext)

  const handleAddToCartClick = () => {
    if (process.browser) {
      let existingCart = localStorage.getItem("woo-ani-cart")
      if (existingCart) {
      } else {
        const newCart = addFirstProduct(product)
        setCart(newCart)
      }
    }
  }

  return (
    <React.Fragment>
      <button onClick={handleAddToCartClick} className="btn btn-secondary">
        Add to cart
      </button>
    </React.Fragment>
  )
}

export default AddToCartButton
