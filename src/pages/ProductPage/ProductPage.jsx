import React, { useEffect } from 'react'
import Products from '../../component/Products'
import c from "./ProductPage.module.scss"

const ProductPage = ({ addToCart, cartQuantity }) => {

  useEffect(() => {
    console.log(cartQuantity)
  })

  return (
    <div className={c.container}>
      <Products addToCart={addToCart} cartQuantity={cartQuantity} />
    </div>
  )
}

export default ProductPage