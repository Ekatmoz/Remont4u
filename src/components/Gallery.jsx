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
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582288/20240415_101030_swotfh.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж галерей из металлоконструкций и дерева</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582293/20240415_111914_xnbfsc.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж галерей из металлоконструкций и дерева</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582295/Gipso_vfggr8.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж галерей из металлоконструкций и дерева</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582296/received_412782521645361_b91td6.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582295/IMG-02b96067591769571debdb74398d7237-V_oh0gze.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582296/received_338531102271984_lamh43.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582296/received_473278968595791_revjdz.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582293/FB_IMG_1679778000135_vzayuf.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582293/20240415_105359_x7uwg2.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582293/FB_IMG_1679777997251_suq6j3.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582294/FB_IMG_1679778008871_prev16.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="https://res.cloudinary.com/dtj7rhgwl/image/upload/v1717582293/FB_IMG_1679777974066_d1qpwq.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
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