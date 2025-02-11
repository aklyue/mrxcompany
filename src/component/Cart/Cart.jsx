import React from 'react';
import c from "./Cart.module.scss";
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { products, setProducts, setCartQuantity } = props;

    const removeFromCart = (product) => {
        const updatedProducts = products.filter((p) => p.id !== product.id);
        setProducts(updatedProducts);
        setCartQuantity((prevQuantity) => Math.max(0, prevQuantity - product.quantity));
    };

    const incrementQuantity = (product) => {
        const updatedProducts = products.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        setProducts(updatedProducts);
        setCartQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = (product) => {
        if (product.quantity === 1) {
            removeFromCart(product);
        } else {
            setProducts(prevProducts => {
                const updatedProducts = prevProducts.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
                );
                setCartQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
                return updatedProducts;
            });
        }
    };

    const calculateTotalCost = (product) => {
        return product.price * product.quantity;
    };

    const calculateTotalPrice = () => {
        return products.reduce((total, product) => total + calculateTotalCost(product), 0);
    };

    return (
        <div>
            <div className={c.mainBox}>
                {products && products.length > 0 ? (
                    <div>
                        {products.map((product) => (
                            <div className={c.container} key={product.id}>
                                <div className={c.product}>
                                    <div className={c.imgContainer}>
                                        <img className={c.img} src={product.image} alt="" />
                                    </div>
                                    <p className={c.price}>${calculateTotalCost(product)}</p>
                                    <p className={c.name}>{product.text}</p>
                                    <div className={c.quantity}>
                                        <button onClick={() => decrementQuantity(product)} className={c.btnQnt}>-</button>
                                        <p>Количество: {product.quantity}</p>
                                        <button onClick={() => incrementQuantity(product)} className={c.btnQnt}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(product)} className={c.btn1}>Удалить</button>
                                    <Link to={`/products/${product.id}`} className={c.btn}>Подробнее</Link>
                                </div>
                            </div>
                        ))}
                        <div className={c.totalPrice}>
                            <p>Общая стоимость: ${calculateTotalPrice()}</p>
                            <button className={c.btnOrder}>Заказать</button>
                        </div>
                    </div>
                ) : (
                    <p className={c.emptyCart}>Корзина пуста</p>
                )}
            </div>
        </div>
    );
}

export default Cart;