import React from 'react'
import "./VideoStyle.css"
import spaceVideo from "../assets/space.mp4"
import { Link } from "react-router-dom"


const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id="video">
                <source src={spaceVideo} />
            </video>
            <div className="content">
                <h1>Galaxy Travel</h1>
                <p></p>
                <div>
                    <Link to="/training" className="btn">Training</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Video