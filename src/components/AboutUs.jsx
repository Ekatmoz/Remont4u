
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section id="get-started" className="get-started section-bg">
      <Container>
        <Row className="justify-content-between gy-4">
          <Col lg={6} className="d-flex align-items-center">
            <div className="content">
              <h3>Ремонт квартир и домов в Европе</h3>
              <p>Электрика, сантехника, демонтаж, штукатурка и покраска стен и потолков, установка потолков из гипсокартона, заливка пола бетоном, установка ОСБ под паркет, ремонт, укладка ламината, паркета, укладка плитки, оклейка обоев, установка дверей, установка галереи из металла, дерева, установка светильников, доставка материала, газ, вывоз мусора.</p>
              <p>Наружные работы: фасад домов, деревянные террасы, укладка тротуарной плитки, устройство галерей с металлоконструкциями и деревом.</p>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="justify-content-center gy-4">
              <Col xs={6} md={6}>
                <Image src="/images/about_us.jpg" height={500} rounded />
              </Col>
              <Col xs={6} md={6}>
                <Image src="/images/floor.jpg" height={500} rounded width={300} />
              </Col>
            </Row>
          </Col>
            {/* <Form action="forms/quote.php" method="post" className="php-email-form">
              <h3>Связаться с нами</h3>
              <p>Вы можете оставить заявку на нашем сайте или позвонить нам по телефону: +36 70 596 1704</p>
              <Row className="gy-3">
                <Col md={12}>
                  <Form.Control type="text" name="name" placeholder="Имя" required />
                </Col>
                <Col md={12}>
                  <Form.Control type="email" name="email" placeholder="Email" required />
                </Col>
                <Col md={12}>
                  <Form.Control type="text" name="phone" placeholder="Телефон" required />
                </Col>
                <Col md={12}>
                  <Form.Control as="textarea" name="message" rows="6" placeholder="Сообщение" required />
                </Col>
                <Col md={12} className="text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>
                  <Button type="submit">Отправить</Button>
                </Col>
              </Row>
            </Form> */}
          
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
