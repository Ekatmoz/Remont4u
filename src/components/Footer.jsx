import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import { Link as ReactLink } from 'react-router-dom'; // Alias Link as ReactLink
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
                  Oktogon, Budapest VI. kerület,<br />
                  Hungary<br /><br />
                  <strong>Phone:</strong> +36 (70) 596 1704<br />
                  <strong>Email:</strong> Remont4u@gmail.com<br />
                </p>
                {/* Use ReactLink instead of Link */}
                <Col>
                  <div className="social-links d-flex mt-3">
                    <ReactLink to="https://www.facebook.com/Remont4U.Frolov" className="d-flex align-items-center justify-content-center"><Facebook /></ReactLink>
                    <ReactLink to="/instagram" className="d-flex align-items-center justify-content-center"><Instagram /></ReactLink>
                    <ReactLink to="/linkedin" className="d-flex align-items-center justify-content-center"><Linkedin /></ReactLink>
                  </div>
                </Col>
              </div>
            </Col>

            <Col lg={2} md={3} className="footer-links">
              <h4>Useful Links</h4>
                <ListGroup>
                  <ListGroup.Item action href="#">Home</ListGroup.Item>
                  <ListGroup.Item action href="#">About us</ListGroup.Item>
                  <ListGroup.Item action href="#">Services</ListGroup.Item>
                  <ListGroup.Item action href="#">Terms of service</ListGroup.Item>
                  <ListGroup.Item action href="#">Privacy policy</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col lg={6} md={3}>
              <MapComponent/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-legal text-center position-relative">
        <Container>
          <div className="copyright">
            &copy; Copyright <strong><span>Remont4u Active s.r.o</span></strong>. All Rights Reserved
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
