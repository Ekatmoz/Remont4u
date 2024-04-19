import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

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
                <div className="social-links d-flex mt-3">
                  <a href="#" className="d-flex align-items-center justify-content-center"><Facebook /></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><Instagram /></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><Linkedin /></a>
                </div>
              </div>
            </Col>

            <Col lg={2} md={3} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </Col>
            <Col lg={6} md={3}>
            map
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
