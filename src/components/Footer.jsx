import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Facebook, Instagram, Play } from 'react-bootstrap-icons';
import { Link as ReactLink } from 'react-router-dom';
import MapComponent from './MapComponent';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content position-relative">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className="footer-info">
                <h3>Remont4u Active s.r.o</h3>
                <p>
                  <strong>Oфис в Bенгрии:</strong><br />
                  Oktogon, Budapest VI. kerület,<br />
                  Hungary<br /><br />
                  <strong>Oфис в Словакии:</strong> <br />
                  Ružinovská 42, Bratislava <br /><br />
                  <strong>Phone:</strong> +38(097)798-85-96<br />
                  <strong>Email:</strong> Remont4u@gmail.com<br />
                </p>
                <div className="social-links d-flex mt-3">
                  <ReactLink to="https://www.facebook.com/Remont4U.Frolov" className="d-flex align-items-center justify-content-center">
                    <Facebook />
                  </ReactLink>
                  <ReactLink to="/instagram" className="d-flex align-items-center justify-content-center">
                    <Instagram />
                  </ReactLink>
                  <ReactLink to="/linkedin" className="d-flex align-items-center justify-content-center">
                    <Play />
                  </ReactLink>
                </div>
              </div>
            </Col>

            <Col lg={2} md={3} className="footer-links">
              <h4>Навигация</h4>
              <ListGroup variant='flush'>
                <ListGroup.Item className='list-item' action href="/">Home</ListGroup.Item>
                <ListGroup.Item className='list-item' action href="/about-us">About us</ListGroup.Item>
                <ListGroup.Item className='list-item' action href="https://www.facebook.com/Remont4U.Frolov">Facebook</ListGroup.Item>
                <ListGroup.Item className='list-item' action href="#">TikTok</ListGroup.Item>
                <ListGroup.Item className='list-item' action href="#">Privacy policy</ListGroup.Item>
              </ListGroup>
            </Col>
            
            <Col lg={6} md={12}>
              <MapComponent />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-legal text-center position-relative">
        <Container>
          <div className="copyright">
            &copy; Copyright <strong><span>Remont</span></strong>. All Rights Reserved
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
