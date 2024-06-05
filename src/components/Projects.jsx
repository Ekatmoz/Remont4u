import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
return (
<section id="projects" className="projects">
   <Container >
      <div className="section-header text-center">
         <h2>Наши роботы</h2>
         <p>Наша опытная команда профессионалов по ремонту сделает Ваш дом уютным и стильным, сохранив его функциональность и комфорт.</p>
      </div>
      <Row className="portfolio-isotope">
         <ul className="portfolio-flters" >
            <li className="filter-active">Ремонтные работы</li>
            <li>Укладка плитки</li>
            <li>Демонтаж</li>
            <li>Фасад домов</li>
            <li>Электромонтажные работы</li>
            <li>Штукатурка и покраска стен и потолков</li>
         </ul>
         <Row className="gy-4 portfolio-container">
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/remonti.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Ремонтные работы</h4>
                  <p>Посмотреть фото по ремонту и реконструкции</p>
                  <a href="assets/img/projects/remonti.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/metal.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж галерей из металлоконструкций</h4>
                  <p>Посмотреть фото по ремонту и реконструкции</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/demontash.jpeg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Демонтаж</h4>
                  <p>Посмотреть фото</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/review1.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Монтаж гипсокартонных потолков</h4>
                  <p>Посмотреть фото</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/bathroom.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Укладка плитки</h4>
                  <p>Посмотреть фото</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
               </div>
            </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
               <img src="/images/houses.jpg" className="img-fluid" alt="" />
               <div className="portfolio-info">
                  <h4>Фасад домов</h4>
                  <p>Посмотреть фото</p>
                  <a href="assets/img/projects/houses.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
               </div>
            </div>
            </Col>
         </Row>
      </Row>
   </Container>
</section>
);
}
export default Projects;