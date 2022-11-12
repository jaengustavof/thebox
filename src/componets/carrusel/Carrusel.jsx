import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img/hero.png';
import img2 from '../../assets/img/hero2.png';
import img3 from '../../assets/img/hero3.png';
import './carrusel.scss'

function CarouselFadeExample() {
    return (
      <Carousel fade className='hero-carrusel' controls={false}>
        <Carousel.Item className='hero-carrusel-item'>
          <img
            className="d-block w-100 hero-carrusel-img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className='hero-carrusel-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }

  /*
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
  */
  
  export default CarouselFadeExample;