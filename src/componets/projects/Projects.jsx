import React from "react";
import "./projects.scss";
import widstone from "../../assets/img/wildstone.png";
import wish from "../../assets/img/wish.png";
import parkinstone from "../../assets/img/parkinstone.png";
import oregano from "../../assets/img/oregano.png";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";

const Projects = () => {

    const handleClick = (e) => {
        const selectedItem = e.target;
        const listItems = document.getElementsByClassName('project-ul-list');
        for(let item of listItems){
            item.classList.remove('li-selected');
        }
        selectedItem.classList.add('li-selected');
    }

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="projects-menu">
          <h3>Projects</h3>
          <ul className="list">
            <li onClick={(e)=> handleClick(e)} id='all' className="project-ul-list li-selected">All</li>
            <li onClick={(e)=> handleClick(e)} id='commercial' className="project-ul-list">Commercial</li>
            <li onClick={(e)=> handleClick(e)} id='residential' className="project-ul-list">Residential</li>
            <li onClick={(e)=> handleClick(e)} id='other' className="project-ul-list">Other</li>
          </ul>
        </div>
        <div className="projects-carrusel">
          <div className="wildstone divs">
            <img src={widstone} alt="" className="img" />
            <div className="div-info">
              <h4>Wildstone Infra Hotel</h4>
              <p>2715 Ash Dr. San Jose, South Dakota</p>
            </div>
          </div>
          <div className="wish divs">
            <img src={wish} alt="" className="img" />
            <div className="div-info">
              <h4>Wish Stone Building</h4>
              <p>2972 Westheimer Rd. Santa Ana, Illinois </p>
            </div>
          </div>
          <div className="parkinstone divs">
            <img src={parkinstone} alt="" className="img" />
            <div className="div-info">
              <h4>Mr. Parkinston’s House</h4>
              <p>3517 W. Gray St. Utica, Pennsylvania</p>
            </div>
          </div>
          <div className="oregano divs">
            <img src={oregano} alt="" className="img" />
            <div className="div-info">
              <h4>Oregano Height</h4>
              <p>2464 Royal Ln. Mesa, New Jersey </p>
            </div>
          </div>
          <div className="buttons">
            <button className="back">
              <img src={left} alt="" /> Back
            </button>
            <div className="marcador">
              <div className="radios">
                <div className="radios-all radio1"></div>
                <div className="radios-all radio2"></div>
                <div className="radios-all radio3"></div>
                <div className="radios-all radio4"></div>
                <div className="radios-all radio5"></div>
              </div>
            </div>
            <button className="next">
              Next
              <img src={right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
