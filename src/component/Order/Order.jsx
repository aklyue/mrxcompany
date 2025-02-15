import React from 'react'
import { useSelector } from 'react-redux';

function Order() {

    const products = useSelector(state => state.cart.products);
    const totalPrice = useSelector(state => state.cart.totalPrice);


  return (
    <div>
        {products.length > 0 ? (
            <div>
                <p>{totalPrice}</p>
            </div>
        ) : (
            <p>Корзина пуста</p>
        )}
    </div>
  )
}

export default Order