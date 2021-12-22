import React, { useEffect, useState } from "react"

export const AppContext = React.createContext([{}, () => {}])

export const AppProvider = (props) => {
  const [cart, setCart] = useState(null)
  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem("ani-com-cart")
      cartData = null !== cartData ? JSON.parse(cartData) : ""
      // setCart(cartData)
      setCart({ product: "123" })
    }
  }, [])

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  )
}
