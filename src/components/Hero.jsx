import { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
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
               <p>Наша компания предоставляет услуги комплексных ремонтов под ключ, с самыми квалифицированными специалистами своего дела!</p>
               {/* <p>Профессиональный ремонт квартир и домов под ключ. Наша комплексная бригада с международным опытом более 17 лет специализируется на полном спектре ремонтных услуг для вашего дома и квартиры.</p> */}
               <Col style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1rem' }}>
               <FaViber style={{ fontSize: '3rem', color: '#feb900' }}/>
               <FaWhatsapp style={{ fontSize: '3rem', color: '#feb900'}}/>
               <FaTelegram style={{ fontSize: '3rem', color: '#feb900' }}/>
               </Col>
               <h3 style={{ fontSize: '1.2rem', color: 'white', letterSpacing: '0.1rem' }}>+38(097)798-85-96</h3>
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