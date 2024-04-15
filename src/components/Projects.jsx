import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container data-aos="fade-up">
        <div className="section-header">
          <h2>Наши роботы</h2>
          <p>Bаш текст</p>
        </div>

        <Row className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
          <ul className="portfolio-flters" >
            <li data-filter="*" className="filter-active">Все</li>
            <li data-filter=".filter-remodeling">Ремонт</li>
            <li data-filter=".filter-construction">Укладка плитки</li>
            <li data-filter=".filter-repairs">Демонтаж</li>
            <li data-filter=".filter-design">Фасад домов</li>
          </ul>

          <Row className="gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="/images/bathroom.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Укладка плитки</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="/images/bathroom.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Ремонт</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="/images/bathroom.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Демонтаж</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="/images/bathroom.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Фасад домов</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
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
