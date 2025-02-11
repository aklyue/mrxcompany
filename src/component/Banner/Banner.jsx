import React from 'react'
import c from "./Banner.module.scss"
import { taglines } from '../../constants/tags'


const Banner = ({ text }) => {
    return (
        <div className={text === taglines[0].text1 ? c.containerTwo : c.container}>
            <div className={text === taglines[0].text1 ? c.taglineTwo : c.tagline}>
                {text}
            </div>
        </div>
    )
}

export default Banner