import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import c from "./SpecificWorkerPage.module.scss"

function SpecificWorkerPage() {

    const [workers, setWorkers] = useState([])
    const [chosenWorker, setChosenWorker] = useState(null);
    const { workersId } = useParams()


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

    useEffect(() => {
        if (workers.length) {
            const foundWorkers = workers.find(item => item.id == Number(workersId));
            setChosenWorker(foundWorkers);
        }
    }, [workers, workersId]);

    return (
        <div className={c.container}>
            <h1 className={c.pageTitle}>Worker {workersId}</h1>
            {!chosenWorker ? <div>Loading...</div> :
                <div className={c.workers}>
                    <img src={chosenWorker.image} className={c.image} alt="" />
                    <h1 className={c.name}>{chosenWorker.name}</h1>
                    <p className={c.text}>{chosenWorker.text}</p>
                </div>}
        </div>
    )
}

export default SpecificWorkerPage