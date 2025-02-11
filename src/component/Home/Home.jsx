import React, { useEffect, useState } from 'react'
import c from "./Home.module.scss"
import Workers from '../Workers';
import ServiceClub from '../ServiceClub';
import { Link } from 'react-router-dom';


const Home = () => {
    const [service, setService] = useState([]);
    const [advantages, setAdvantages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/service")
            .then(response => response.json())
            .then(data => {
                setService(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:3001/advantages")
            .then(response => response.json())
            .then(data => {
                setAdvantages(data);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []);

    return (
        <div className={c.container}>
            <div className={c.cards}>
                <Link className={c.btn} to={"/products"}>Просмотреть товары</Link>
            </div>
            <div className={c.advantages}>
                {advantages.map((advantage) =>
                    <div className={c.advantage} key={advantage.id}>
                        <div className={c.box} >
                            <div className={c.frame}>
                                <img className={c.image} src={advantage.image} alt="" />
                                <p className={c.text}>{advantage.text}</p>
                            </div>
                        </div>
                    </div>)}
            </div>

            <ServiceClub/>
            <Workers />
        </div>
    )
}

export default Home;