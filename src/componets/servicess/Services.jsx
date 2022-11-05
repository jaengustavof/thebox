import React from "react";
import "./services.scss";
import construction from "../../assets/img/construction.png";
import linea from "../../assets/img/linea.png";
import renovation from "../../assets/img/renovation.png";
import consultation from "../../assets/img/consultation.png";
import electric1 from "../../assets/img/electric1.png";
import electric2 from "../../assets/img/electric2.png";
import architecture from "../../assets/img/architecture.png";
import repair from "../../assets/img/repair.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="container-h2">
          <h2>Services</h2>
        </div>
        <div className="primeralinea">
          <div className="primeralinea-cajas">
            <div className="cuadroimg"></div>
            <img src={construction} alt="" className="casa" />
            <img src={linea} alt="" className="linea" />
            <h4>Construction</h4>
          </div>
          <div className="primeralinea-cajas azul">
            <div className="cuadroimg"></div>
            <img src={renovation} alt="" className="renovation" />
            <img src={linea} alt="" className="linea" />
            <h4 className="h4-black">Renovation</h4>
          </div>
          <div className="primeralinea-cajas">
            <div className="cuadroimg"></div>
            <img src={consultation} alt="" className="consultation" />
            <img src={linea} alt="" className="linea" />
            <h4> Consultation</h4>
          </div>
        </div>
        <div className="segundalinea">
          <div className="segundalinea-cajas azul">
            <div className="cuadroimg"></div>
            <img src={repair} alt="" className="repair" />
            <img src={linea} alt="" className="linea" />
            <h4>Repair Services</h4>
          </div>
          <div className="segundalinea-cajas">
            <div className="cuadroimg"></div>
            <img src={architecture} alt="" className="architecture" />
            <img src={linea} alt="" className="linea" />
            <h4 className="h4-blue">Architecture</h4>
          </div>
          <div className="segundalinea-cajas azul">
            <div className="cuadroimg"></div>
            <img src={electric1} alt="" className="electric1" />
            <img src={electric2} alt="" className="electric2" />
            <img src={linea} alt="" className="linea" />
            <h4> Electric</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
