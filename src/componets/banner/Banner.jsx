import React from 'react';
import './banner.scss';
import left from '../../assets/img/left.png';
import right from '../../assets/img/right.png';

const Banner = () => {
  return (
    <div className='hero'>
        <div className="hero-container">
            <h1 className='hero-container_title'>Building things is our mission.</h1>
            <div className="hero-container_info">
                <div className="info-text">
                    <h3>Feature Projects</h3>
                    <p>The National University of Architecture</p>
                </div>
                <div className="info-button">
                    <button>
                        <img src={left} alt="" /> Back
                    </button>
                    <button>
                        Next<img src={right} alt="" /> 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner