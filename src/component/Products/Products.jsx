import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import c from "./Products.module.scss";
import CartButton from '../UI/CartButton';

const Products = ({ addToCart, cartQuantity }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []);

    const handleToCart = (product) => {
        addToCart(product);
    }

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
                    <Link to={`/products/${item.id}`} className={c.btn}>
                        Подробнее
                    </Link>
                    <button onClick={() => handleToCart(item)} className={c.btn1}>
                        Заказать
                    </button>
                </div>
            ))}

            <CartButton products={products} cartQuantity={cartQuantity}/>
        </div>
    );
};

export default Products;