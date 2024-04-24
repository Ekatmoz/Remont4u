import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className='hero'>
      <div className="info d-flex align-items-center">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>Добро пожаловать!</h2>
            <p>Комплексная бригада занимается ремонтом квартир и домов под ключ.
              Международный опыт более 17 лет.</p>
              <FaViber style={{ color: 'white', fontSize: '2rem' }}/>
              <FaWhatsapp style={{ color: 'white', fontSize: '2rem'}}/>
              <FaTelegram style={{ color: 'white', fontSize: '2rem' }}/>
              <p style={{ fontSize: '1rem' }}>+42949681130</p>
            <a href="#get-started" className="btn-get-started">Детальнее</a>
          </div>
        </div>
      </Container>
    </div>

    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
  <Carousel.Item>
    <div className="carousel-image-container">
      <Image className="carousel-image" src="images/renovation.jpg" />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="carousel-image-container">
      <Image className="carousel-image" src="images/remont3.jpg" />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="carousel-image-container">
      <Image className="carousel-image" src="images/remont2.jpg" />
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="carousel-image-container">
      <Image className="carousel-image" src="images/12114.jpg" />
    </div>
  </Carousel.Item>
</Carousel>

    </section>
  );
}

export default Hero;