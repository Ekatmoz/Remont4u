import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CameraFill, HouseCheckFill, PersonCheckFill, Rulers, ShieldFillCheck, Tools } from 'react-bootstrap-icons';

const Services = () => {
  return ( 
    <section id="services" className="services section-bg">
      <Container>
        <div className="section-header">
          <h2>Детальнее</h2>
          <p>Наша опытная команда профессионалов поможет Вам с расчетом всех работ.</p>
        </div>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="service-item">
              <div className="icon">
                <HouseCheckFill className='i'/>
              </div>
              <h3>Точный кошторис</h3>
              <p>после замеров</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <Tools className='i'/>
              </div>
              <h3>Качественные материалы</h3>
              <p>известных брендов</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <PersonCheckFill className='i'/>
              </div>
              <h3>Ответственные специалисты</h3>
              <p>в своем напрвлении</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <Rulers className='i'/>
              </div>
              <h3>Бесплатные замеры</h3>
              <p>после заявки на замеры</p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <CameraFill className='i'/>
              </div>
              <h3>Фотоотчёт</h3>
              <p>выполненых работ</p>
              {/* <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a> */}
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="service-item position-relative">
              <div className="icon">
                <ShieldFillCheck className='i'/>
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