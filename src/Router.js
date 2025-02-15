import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage"
import Header from "./component/Header"
import SpecificProductPage from "./pages/SpecificProductPage";
import headerOne from "./assets/images/header/headerImage.png"
import headerTwo from "./assets/images/header/homePageImage.png"
import headerThree from "./assets/images/header/headerImage2.png"
import { taglines } from "./constants/tags"
import Footer from "./component/Footer";
import CartPage from "./pages/CartPage";
import ContactsPage from "./pages/ContactsPage";
import SpecificWorkerPage from "./pages/SpecificWorkerPage";
import OrderPage from "./pages/OrderPage";


const Router = () => {

    const [products, setProducts] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);


    const addToCart = (product) => {
        const updatedProducts = [...products];
        const existingProductIndex = updatedProducts.findIndex((p) => p.id === product.id);

        if (existingProductIndex !== -1) {
            updatedProducts[existingProductIndex].quantity += 1;
        } else {
            updatedProducts.push({ ...product, quantity: 1 });
        }
        setProducts(updatedProducts);
        setCartQuantity((prevQuantity) => prevQuantity + 1);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={
                        <>
                            <Header image={headerTwo} text={taglines[0].text1} />
                            <HomePage />
                            <Footer />
                        </>} />
                    <Route path="/products" element={
                        <>
                            <Header image={headerOne} text={taglines[0].text2} />
                            <ProductsPage addToCart={addToCart} cartQuantity={cartQuantity} />
                            <Footer />
                        </>} />
                    <Route path="/about" element={
                        <>
                            <Header image={headerThree} text={taglines[0].text3} />
                            <AboutPage />
                            <Footer />
                        </>
                    } />
                    <Route path="/cart" element={
                        <>
                            <Header image={headerThree} text={taglines[0].text4} />
                            <CartPage products={products} setProducts={setProducts} setCartQuantity={setCartQuantity} />
                            <Footer />
                        </>
                    } />
                    <Route path="/products/:productsId" element={
                        <>
                            <Header image={headerOne} text={taglines[0].text2} />
                            <SpecificProductPage addToCart={addToCart} />
                            <Footer />
                        </>
                    } />
                    <Route path="/workers/:workersId" element={
                        <>
                            <Header image={headerOne} text={taglines[0].text2} />
                            <SpecificWorkerPage />
                            <Footer />
                        </>
                    } />
                    <Route path="/contacts" element={
                        <>
                            <Header image={headerThree} text={taglines[0].text5} />
                            <ContactsPage />
                            <Footer />
                        </>
                    } />
                    <Route path="/order" element={
                        <>
                            <Header image={headerOne} text={taglines[0].text6} />
                            <OrderPage />
                            <Footer />
                        </>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>)
}

export default Router;