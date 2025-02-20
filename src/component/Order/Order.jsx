import React, { useState } from "react";
import { useSelector } from "react-redux";
import c from "./Order.module.scss";
import emailjs from "@emailjs/browser"

function Order() {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+7");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
        email,
        phone,
        address,
        totalPrice,
        products: products.map((p) => `${p.text} (x${p.quantity})`).join(", ")
    }

    emailjs.send(
        "service_25kqmge",
        "template_5rb7d94",
        templateParams,
        "zx1-Twtfp6ZEp_Iee"
    ).then((response) => {
        console.log("Email отправлен", response.status, response.text);
        alert("Заказ успешно оформлен")
    }).catch((err) => {
        console.error(err)
    })
  };

  return (
    <div className={c.mainBox}>
      {products.length > 0 ? (
        <div className={c.orderBox}>
          <form onSubmit={handleSubmit} className={c.orderForm}>
            <p className={c.noticeText}>Электронный адрес</p>
            <input
              className={c.inputBox}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Введите ваш Email"
            />
            <p className={c.noticeText}>Телефон</p>
            <input
              className={c.inputBox}
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name=""
              placeholder="Введите ваш телефон"
            />
            <p className={c.noticeText}>Адрес доставки</p>
            <input
              className={c.inputBox}
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Введите адрес доставки товара"
            />
            <div>
              <button className={c.btn} type="submit">
                Оформить заказ
              </button>
            </div>
          </form>
          <div className={c.priceBox}>
            <p className={c.noticeText}>Сумма заказа: ${totalPrice}</p>
          </div>
        </div>
      ) : (
        <div className={c.emptyBox}>
          <p className={c.cartTxt}>Корзина пуста</p>
        </div>
      )}
    </div>
  );
}

export default Order;
