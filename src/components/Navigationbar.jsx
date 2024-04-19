import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
          Remont4u Active s.r.o<span>.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            style={{ backgroundColor: 'rgba(49, 54, 63, 0.9)'}}
            className="text-white"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Remont4u Active s.r.o
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#get-started" className='link'>O НАС</Nav.Link>
                <Nav.Link href="#footer" className='link'>КОНТАКТЫ</Nav.Link>
                <Nav.Link href="#link" className='link'>ГАЛЕРЕЯ</Nav.Link>
                <Nav.Link href="#link" className='link'>ОТЗЫВЫ</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
