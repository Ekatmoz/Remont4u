import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

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
            <h2>Добро пожаловать <span>Remont4U</span></h2>
            <p>Комплексная бригада занимается ремонтом квартир и домов под ключ.
              Международный опыт более 17 лет.</p>
            <a href="#get-started" className="btn-get-started">Детальнее</a>
          </div>
        </div>
      </Container>
    </div>

    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      <Carousel.Item >
      <Image src="images/remont3.jpg" fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="images/remont2.jpg" fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="images/12114.jpg" fluid />
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default Hero;