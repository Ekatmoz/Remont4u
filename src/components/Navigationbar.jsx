import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'; 
import { FaFacebook, FaTiktok } from 'react-icons/fa';

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'rgba(49, 54, 63, 0.9)' }}>
        <Container className='logo'>
          <Navbar.Brand href="#">
            <img
            src="/favicon.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Our logo"
            style={{ filter: 'invert(100%)', marginRight: '5px' }}
          />
          Remont4u Active <span>s.r.o.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            style={{ backgroundColor: 'rgba(49, 54, 63, 0.9)'}}
            className="text-white"
          >
            <Offcanvas.Header closeButton closeVariant='white'>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Remont4u Active s.r.o
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/#" className='nav-link link'>O НАС</Link>
                <Link to="/contacts" className='nav-link link'>КОНТАКТЫ</Link>
                <Link to="/gallery" className='nav-link link'>ГАЛЕРЕЯ</Link>
                <Link to="/testimonials" className='nav-link link'>ОТЗЫВЫ</Link>
                {/* Facebook Link */}
                <Link to="https://www.facebook.com/Remont4U.Frolov" target="_blank" rel="noopener noreferrer" className="nav-link link">
                  <FaFacebook style={{ fontSize: '1.5rem' }} />
                </Link>
                <Link target="_blank" rel="noopener noreferrer" className="nav-link link">
                  <FaTiktok style={{ fontSize: '1.5rem' }}/>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
