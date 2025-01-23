import { Container, Row, Col, Image } from 'react-bootstrap';
const AboutUs = () => {
return (
<section id="get-started" className="get-started section-bg">
   <Container>
      <Row className="justify-content-between gy-4">
         <Col lg={6} className="d-flex align-items-center">
         <div className="content">
            <h3>Ремонт квартир и домов в Ужгороде и Закарпатской области, а также Венгрия и Словакия.</h3>
            <p>Мы предлагаем комплексные услуги по внутренним и наружным ремонтным и строительным работам. Наши специалисты обеспечивают высокое качество и внимательное отношение к каждому этапу работ.</p>
            <p>Наши мастера обладают многолетним опытом и используют только качественные материалы. Мы стремимся воплотить в жизнь все ваши идеи и пожелания, создавая уют и комфорт в вашем доме. Доверьте нам свой ремонт, и мы превратим ваше пространство в настоящее произведение искусства.</p>
         </div>
         </Col>
         <Col lg={6}>
         <Row className="justify-content-center gy-4">
            <Col>
            <Image src="/images/before_after.jpeg" fluid rounded />
            </Col>
         </Row>
         </Col>
      </Row>
   </Container>
</section>
);
}
export default AboutUs;