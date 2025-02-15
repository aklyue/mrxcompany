import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/cartSlice";
import { Link } from "react-router-dom";
import c from "./Cart.module.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={c.mainBox}>
        {products.length > 0 ? (
          <div>
            {products.map((product) => (
              <div className={c.container} key={product.id}>
                <div className={c.product}>
                  <div className={c.imgContainer}>
                    <img className={c.img} src={product.image} alt="" />
                  </div>
                  <p className={c.price}>${product.price * product.quantity}</p>
                  <p className={c.name}>{product.text}</p>
                  <div className={c.quantity}>
                    <button
                      onClick={() => dispatch(decrementQuantity(product.id))}
                      className={c.btnQnt}
                    >
                      -
                    </button>
                    <p>Количество: {product.quantity}</p>
                    <button
                      onClick={() => dispatch(incrementQuantity(product.id))}
                      className={c.btnQnt}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className={c.btn1}
                  >
                    Удалить
                  </button>
                  <Link to={`/products/${product.id}`} className={c.btn}>
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
            <div className={c.totalPrice}>
              <p>Общая стоимость: ${totalPrice}</p>
              <Link to={"/order"} className={c.btnOrder}>
                Заказать
              </Link>
            </div>
          </div>
        ) : (
          <p className={c.emptyCart}>Корзина пуста</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
