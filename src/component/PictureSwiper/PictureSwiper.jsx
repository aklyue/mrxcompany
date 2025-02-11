import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"
import "swiper/css/pagination"
import c from "./PictureSwiper.module.scss"
import useInitializeSwiper from '../../hooks/useInitializeSwiper';

const PictureSwiper = () => {

    const { initialize, slideNext, slidePrev } = useInitializeSwiper()

    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/boxes")
            .then(response => response.json())
            .then(data => {
                setBoxes(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []);

    

    return (
        <div className={c.component}>
            <div className={c.topPart}>
                <div className={c.title}>Удобства автосервиса</div>
                <div className={c.buttons}>
                    <button className={c.button} onClick={slidePrev}>{"<"}</button>
                    <button className={c.button} onClick={slideNext}>{">"}</button>
                </div>
            </div>
            <div className={c.swiperWrapper}>
                <Swiper onSwiper={(element) => { initialize(element) }} pagination modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} loop grabCursor spaceBetween={30} className={c.swiper}>
                    {boxes.map(box => <SwiperSlide className={c.slide} key={box.id}>
                        <img className={c.boxImage} src={box.image} alt={box.title} />
                        {box.title && <div className={c.boxTitle}>{box.title}</div>}
                    </SwiperSlide>)}
                </Swiper>
            </div>
            <div className={c.widget}>
                <div className={c.title}>
                    Об автосервисе
                </div>
                <div className={c.widgetBox}>
                    <div className={c.widgetImgBox}>
                        <img className={c.widgetImage} src="http://localhost:3000/assets/images/widget/widget1.png" alt="" />
                    </div>
                    <div className={c.widgetTextBox}>
                        <h1 className={c.widgetTitle}>
                            Автосервисный центр
                        </h1>
                        <p className={c.widgetText}>
                            Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices risus viverra. Purus volutpat phasellus viverra vestibulum quis. Gravida pretium odio enim ut id tempus semper. Urna cum at in iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis dolor id. Maecenas vivamus tristique donec neque id convallis. Feugiat fusce at est at.<br /> <br />
                            Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius in eu venenatis.<br /> <br />
                            Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget urna magna interdum feugiat ut. In purus rhoncus egestas euismod morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis. Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum suscipit pellentesque risus non.
                        </p>
                        <div className={c.stats}>
                            <div className={c.statsInfo}>
                                <h1 className={c.digit}>24</h1>
                                <p className={c.boldText}>Доступных боксов</p>
                            </div>
                            <div className={c.statsInfo}>
                                <h1 className={c.digit}>4</h1>
                                <p className={c.boldText}>Рабочих крыла</p>
                            </div>
                            <div className={c.statsInfo}>
                                <h1 className={c.digit}>3</h1>
                                <p className={c.boldText}>Рабочих столовых</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PictureSwiper