import React from 'react'
import Cart from '../../component/Cart'

function CartPage({products, setProducts, setCartQuantity }) {

  return (
    <div>
        <Cart products={products} setProducts={setProducts} setCartQuantity={setCartQuantity} ></Cart>
    </div>
  )
}

export default CartPage