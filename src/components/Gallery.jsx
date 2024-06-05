import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
return (
<section id="projects" className="projects">
   <Container >
      <div className="section-header text-center">
         <h2>Галерея</h2>
         <p>Фотографии – это лучшая рекомендация нашей работы. 
     Ознакомьтесь с нашими проектами и убедитесь в высоком качестве и профессионализме нашей команды.
  </p>
      </div>
      <Row className="portfolio-isotope">
         <Row className="gy-4 portfolio-container">
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/remonti.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/metal.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж галерей из металлоконструкций</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/demontash.jpeg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Демонтаж</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/review1.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж гипсокартонных потолков</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/bathroom.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Укладка плитки</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/houses.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Фасад домов</h4>
               </div>
            </div>
            </Col>
         </Row>
      </Row>
   </Container>
</section>
);
}
export default Gallery;