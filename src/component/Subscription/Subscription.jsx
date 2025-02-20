import React, { useEffect, useState } from 'react'
import c from "./Subscription.module.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"
import "swiper/css/pagination"

import useInitializeSwiper from '../../hooks/useInitializeSwiper';

const Subscription = () => {
    const [servicesSlide, setServicesSlide] = useState([])

    const { initialize, slideNext, slidePrev } = useInitializeSwiper()

    useEffect(() => {
        fetch("http://localhost:3001/serviceSlide")
            .then(response => response.json())
            .then(data => {
                setServicesSlide(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []);

    return (
        <div className={c.container}>
            <div className={c.abonementBox}>
                <div className={c.topPart}>
                    <div className={c.title}>Цены и абонементы</div>
                </div>
                <div className={c.subscriptions}>
                    <button className={c.subscription}>
                        <p>
                            Зимний сезон 2021-2022
                        </p>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 9C20 9.34093 19.8683 9.6679 19.6339 9.90897C19.3995 10.15 19.0816 10.2855 18.7501 10.2855H4.26926L9.63616 15.8028C9.75237 15.9223 9.84455 16.0642 9.90744 16.2203C9.97033 16.3765 10.0027 16.5439 10.0027 16.7129C10.0027 16.8819 9.97033 17.0493 9.90744 17.2054C9.84455 17.3616 9.75237 17.5035 9.63616 17.623C9.51995 17.7425 9.38199 17.8373 9.23016 17.902C9.07833 17.9667 8.9156 18 8.75126 18C8.58692 18 8.42418 17.9667 8.27235 17.902C8.12052 17.8373 7.98256 17.7425 7.86636 17.623L0.367193 9.91012C0.250798 9.79071 0.158451 9.64886 0.095442 9.49268C0.0324329 9.33651 0 9.16909 0 9C0 8.83092 0.0324329 8.66349 0.095442 8.50732C0.158451 8.35114 0.250798 8.20929 0.367193 8.08988L7.86636 0.376985C8.10105 0.135606 8.41935 0 8.75126 0C9.08316 0 9.40147 0.135606 9.63616 0.376985C9.87085 0.618364 10.0027 0.945745 10.0027 1.28711C10.0027 1.62847 9.87085 1.95585 9.63616 2.19723L4.26926 7.71452H18.7501C19.0816 7.71452 19.3995 7.84995 19.6339 8.09103C19.8683 8.3321 20 8.65907 20 9Z" fill="white" />
                        </svg>
                    </button>
                    <button className={c.subscription}>
                        <p>
                            Абонементы
                        </p>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 9C20 9.34093 19.8683 9.6679 19.6339 9.90897C19.3995 10.15 19.0816 10.2855 18.7501 10.2855H4.26926L9.63616 15.8028C9.75237 15.9223 9.84455 16.0642 9.90744 16.2203C9.97033 16.3765 10.0027 16.5439 10.0027 16.7129C10.0027 16.8819 9.97033 17.0493 9.90744 17.2054C9.84455 17.3616 9.75237 17.5035 9.63616 17.623C9.51995 17.7425 9.38199 17.8373 9.23016 17.902C9.07833 17.9667 8.9156 18 8.75126 18C8.58692 18 8.42418 17.9667 8.27235 17.902C8.12052 17.8373 7.98256 17.7425 7.86636 17.623L0.367193 9.91012C0.250798 9.79071 0.158451 9.64886 0.095442 9.49268C0.0324329 9.33651 0 9.16909 0 9C0 8.83092 0.0324329 8.66349 0.095442 8.50732C0.158451 8.35114 0.250798 8.20929 0.367193 8.08988L7.86636 0.376985C8.10105 0.135606 8.41935 0 8.75126 0C9.08316 0 9.40147 0.135606 9.63616 0.376985C9.87085 0.618364 10.0027 0.945745 10.0027 1.28711C10.0027 1.62847 9.87085 1.95585 9.63616 2.19723L4.26926 7.71452H18.7501C19.0816 7.71452 19.3995 7.84995 19.6339 8.09103C19.8683 8.3321 20 8.65907 20 9Z" fill="white" />
                        </svg>
                    </button>
                    <button className={c.subscription}>
                        <p>
                            Скидки
                        </p>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 9C20 9.34093 19.8683 9.6679 19.6339 9.90897C19.3995 10.15 19.0816 10.2855 18.7501 10.2855H4.26926L9.63616 15.8028C9.75237 15.9223 9.84455 16.0642 9.90744 16.2203C9.97033 16.3765 10.0027 16.5439 10.0027 16.7129C10.0027 16.8819 9.97033 17.0493 9.90744 17.2054C9.84455 17.3616 9.75237 17.5035 9.63616 17.623C9.51995 17.7425 9.38199 17.8373 9.23016 17.902C9.07833 17.9667 8.9156 18 8.75126 18C8.58692 18 8.42418 17.9667 8.27235 17.902C8.12052 17.8373 7.98256 17.7425 7.86636 17.623L0.367193 9.91012C0.250798 9.79071 0.158451 9.64886 0.095442 9.49268C0.0324329 9.33651 0 9.16909 0 9C0 8.83092 0.0324329 8.66349 0.095442 8.50732C0.158451 8.35114 0.250798 8.20929 0.367193 8.08988L7.86636 0.376985C8.10105 0.135606 8.41935 0 8.75126 0C9.08316 0 9.40147 0.135606 9.63616 0.376985C9.87085 0.618364 10.0027 0.945745 10.0027 1.28711C10.0027 1.62847 9.87085 1.95585 9.63616 2.19723L4.26926 7.71452H18.7501C19.0816 7.71452 19.3995 7.84995 19.6339 8.09103C19.8683 8.3321 20 8.65907 20 9Z" fill="white" />
                        </svg>
                    </button>
                    <button className={c.subscription}>
                        <p>
                            Дополнительные услуги
                        </p>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 9C20 9.34093 19.8683 9.6679 19.6339 9.90897C19.3995 10.15 19.0816 10.2855 18.7501 10.2855H4.26926L9.63616 15.8028C9.75237 15.9223 9.84455 16.0642 9.90744 16.2203C9.97033 16.3765 10.0027 16.5439 10.0027 16.7129C10.0027 16.8819 9.97033 17.0493 9.90744 17.2054C9.84455 17.3616 9.75237 17.5035 9.63616 17.623C9.51995 17.7425 9.38199 17.8373 9.23016 17.902C9.07833 17.9667 8.9156 18 8.75126 18C8.58692 18 8.42418 17.9667 8.27235 17.902C8.12052 17.8373 7.98256 17.7425 7.86636 17.623L0.367193 9.91012C0.250798 9.79071 0.158451 9.64886 0.095442 9.49268C0.0324329 9.33651 0 9.16909 0 9C0 8.83092 0.0324329 8.66349 0.095442 8.50732C0.158451 8.35114 0.250798 8.20929 0.367193 8.08988L7.86636 0.376985C8.10105 0.135606 8.41935 0 8.75126 0C9.08316 0 9.40147 0.135606 9.63616 0.376985C9.87085 0.618364 10.0027 0.945745 10.0027 1.28711C10.0027 1.62847 9.87085 1.95585 9.63616 2.19723L4.26926 7.71452H18.7501C19.0816 7.71452 19.3995 7.84995 19.6339 8.09103C19.8683 8.3321 20 8.65907 20 9Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={c.services}>
                <div className={c.topPart}>
                    <div className={c.title}>Услуги</div>
                    <div className={c.buttons}>
                        <button className={c.button} onClick={slidePrev}>{"<"}</button>
                        <button className={c.button} onClick={slideNext}>{">"}</button>
                    </div>
                </div>
                <div className={c.swiperWrapper}>
                    <Swiper onSwiper={(element) => { initialize(element) }} pagination modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} slidesPerView={1} loop grabCursor spaceBetween={30} className={c.swiper}>
                        {servicesSlide.map(serviceSlide => <SwiperSlide className={c.slide} key={serviceSlide.id}>
                            <div className={c.imageBox}>
                                <img className={c.serviceImage} src={serviceSlide.image} alt={serviceSlide.title} />
                                <div className={c.info}>
                                    <p className={c.serviceTitle}>{serviceSlide.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Subscription