import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';

const Services = () => {
  return ( 
    <section id="services" className="services section-bg">
      <Container data-aos="fade-up">
        <div className="section-header">
          <h2>Services</h2>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <House style={{ fontSize: '40px', color: 'var(--color-secondary)' }}/>
              </div>
              <h3>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-arrow-up-from-ground-water"></i>
              </div>
              <h3>Eosle Commodi</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-compass-drafting"></i>
              </div>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-trowel-bricks"></i>
              </div>
              <h3>Asperiores Commodit</h3>
              <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
              <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-helmet-safety"></i>
              </div>
              <h3>Velit Doloremque</h3>
              <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
              <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-arrow-up-from-ground-water"></i>
              </div>
              <h3>Dolori Architecto</h3>
              <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
              <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
 
export default Services;