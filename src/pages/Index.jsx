import React from 'react';
import Header from '../componets/header/Header';
import Banner from '../componets/banner/Banner';
import Reputation from '../componets/reputation/Reputation';
import About from '../componets/about/About';
import Services from '../componets/servicess/Services';
import Experience from '../componets/experience/Experience';
import Consultation from '../componets/consultation/Consultation';
import Projects from '../componets/projects/Projects';
import Login from '../componets/login/Login';
import Footer from '../componets/footer/Footer'
import CarouselFadeExample from '../componets/carrusel/Carrusel';

const Index = () => {
  return (
    <section>
        <Header />
        <Banner />
        <CarouselFadeExample/>
        <Reputation />
        <About />
        <Services />
        <Experience />
        <Consultation />
        <Projects />
        <Login />
        <Footer />
    </section>

  )
}

export default Index
