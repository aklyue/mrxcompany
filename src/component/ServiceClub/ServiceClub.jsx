import React from 'react'
import c from "./ServiceClub.module.scss"

const ServiceClub = () => {
    return (
        <div className={c.container}>
            <div className={c.widget}>
                <div className={c.widgetBox}>
                    <div className={c.widgetImgBox}>
                        <img className={c.widgetImage} src="http://localhost:3000/assets/images/widget/widget2.png" alt="" />
                    </div>
                    <div className={c.widgetTextBox}>
                        <h1 className={c.widgetTitle}>
                            Наш сервис
                        </h1>
                        <p className={c.widgetText}>
                            Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus quam tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. Donec sit pellentesque enim, vestibulum. <br /><br />
                            Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.
                        </p>
                        <div className={c.info}>
                            <h1 className={c.boldText}>Ornare orci ut dictum nulla fames. </h1>
                            <ul className={c.list}>
                                <li className={c.point}>
                                    Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.
                                </li>
                                <li className={c.point}>
                                    Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum auctor vitae in.
                                </li>
                                <li className={c.point}>
                                    Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis.
                                </li>
                                <li className={c.point}>
                                    Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceClub