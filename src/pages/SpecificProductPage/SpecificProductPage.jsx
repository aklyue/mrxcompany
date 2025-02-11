import React, { useEffect, useState } from 'react'
import c from "./SpecificProductPage.module.scss"
import { useParams } from 'react-router-dom'

const SpecificProductPage = ({addToCart}) => {

  const [products, setProducts] = useState([])
  const [chosenProduct, setChosenProduct] = useState(null);
  const { productsId } = useParams()

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

  useEffect(() => {
    if (products.length) {
      const foundProducts = products.find(item => item.id == Number(productsId));
      setChosenProduct(foundProducts);
    }
  }, [products, productsId]);

  const handleToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className={c.container}>
      <h1 className={c.pageTitle}>Product {productsId}</h1>
      {!chosenProduct ? <div>Loading...</div> :
        <div className={c.products}>
          <img src={chosenProduct.image} className={c.image} alt="" />
          <p className={c.date}>{chosenProduct.date}</p>
          <h1 className={c.title}>{chosenProduct.text}</h1>
          <p className={c.text}>{chosenProduct.additional}</p>

          <button className={c.btn} onClick={() => handleToCart(chosenProduct)}>Заказать</button>
        </div>}
    </div>
  )
}

export default SpecificProductPage