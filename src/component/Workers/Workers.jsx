import React, { useState, useEffect } from 'react'
import c from "./Workers.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"
import "swiper/css/pagination"

import useInitializeSwiper from '../../hooks/useInitializeSwiper';
import { Link } from 'react-router-dom';

const Workers = () => {
    const [workers, setWorkers] = useState([])

    const { initialize, slideNext, slidePrev } = useInitializeSwiper()
    useEffect(() => {
        fetch("http://localhost:3001/workers")
            .then(response => response.json())
            .then(data => {
                setWorkers(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []);
    return (
        <div className={c.component}>
            <div className={c.topPart}>
                <div className={c.title}>Наши работники</div>
                <div className={c.buttons}>
                    <button className={c.button} onClick={slidePrev}>{"<"}</button>
                    <button className={c.button} onClick={slideNext}>{">"}</button>
                </div>
            </div>
            <div className={c.swiperWrapper}>
                <Swiper style={{ height: "100%", padding: "4rem" }} onSwiper={(element) => { initialize(element) }} pagination modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} slidesPerView={6} loop grabCursor spaceBetween={100} className={c.swiper}>
                    {workers.map(worker => <SwiperSlide className={c.slide} key={worker.id}>
                        <Link to={`/workers/${worker.id}`} className={c.link}>
                            <div className={c.workerBox}>
                                <div className={c.imageBox}>
                                    <img className={c.workerImage} src={worker.image} alt={worker.title} />
                                </div>
                                <div className={c.info}>
                                    <p className={c.workerName}>{worker.name}</p>
                                    <p className={c.workerText}>{worker.text}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default Workers