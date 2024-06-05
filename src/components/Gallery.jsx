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
                  <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582298/received_1807985649709637_k7dgqd.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
               <div className="portfolio-content h-100">
                  <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582298/received_2213934898940614_eczbhx.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
               <div className="portfolio-content h-100">
                  <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582298/received_1730673840795896_yw6ji8.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
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
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582310/review2_cczdlu.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Укладка плитки</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582303/review3_gbp0jp.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Укладка плитки</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582298/received_1630665684337060_i1gy7j.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Укладка плитки</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582294/FB_IMG_1695627719545_r3ihwn.jpg" className="img-fluid" alt="" />
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
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582297/received_1142206603596052_jdh9hc.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Фасад домов</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582264/20240410_132455_xxuxwo.jpg" className="img-fluid" alt="" />
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