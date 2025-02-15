import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import c from "./Products.module.scss";
import CartButton from '../UI/CartButton';

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const cartQuantity = useSelector(state => state.cart.cartQuantity);

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Ошибка:', error));
    }, []);

    return (
        <div className={c.products}>
            {products.map(item => (
                <div className={c.item} key={item.id}>
                    <div className={c.cost}>
                        <img className={c.img} src={item.image} alt="asdasd" />
                        <p className={c.price}>${item.price}</p>
                        <p className={c.text}>{item.text}</p>
                        <p className={c.additional}>{item.additional}</p>
                    </div>
                    <Link to={`/products/${item.id}`} className={c.btn}>Подробнее</Link>
                    <button onClick={() => dispatch(addToCart(item))} className={c.btn1}>Заказать</button>
                </div>
            ))}
            <CartButton cartQuantity={cartQuantity} />
        </div>
    );
};

export default Products;