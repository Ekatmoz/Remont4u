import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';

const Services = () => {
  return ( 
    <section id="services" className="services section-bg">
      <Container data-aos="fade-up">
        <div className="section-header">
          <h2>Детальнее</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <House style={{ fontSize: '40px', color: 'var(--color-secondary)' }}/>
              </div>
              <h3>Точный кошторис</h3>
              <p>после замеров</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-arrow-up-from-ground-water"></i>
              </div>
              <h3>Качественные материалы</h3>
              <p>известных брендов</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-compass-drafting"></i>
              </div>
              <h3>Ответственные специалисты</h3>
              <p>в своем напрвлении</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-trowel-bricks"></i>
              </div>
              <h3>Бесплатные замеры</h3>
              <p>после заявки на замеры</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-helmet-safety"></i>
              </div>
              <h3>Фотоотчет</h3>
              <p>выполненых работ</p>
              {/* <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a> */}
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-arrow-up-from-ground-water"></i>
              </div>
              <h3>Неизменность цены и терминов</h3>
              <p>чётко вкладываемся в сроки</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
 
export default Services;