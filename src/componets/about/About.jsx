import React from 'react';
import './about.scss';
import about from '../../assets/img/about.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-container">
            <div className="about-container_img">
                <img src={about} alt="" />
            </div>
            <div className="about-container_us">
                <h3>About us</h3>
                <div className="us-text">
                    <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. </p>
                    <p>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                </div>
                <a href="#" className='enlace'>More on Our History</a>
            </div>
        </div>
    </div>
  )
}

export default About