import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg" variant="dark" fixed='top'>
        <Container className='logo'>
          <Navbar.Brand href="#"> Remont4u Active s.r.o<span>.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Remont4U
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" className='link'>O НАС</Nav.Link>
                <Nav.Link href="#link" className='link'>КОНТАКТЫ</Nav.Link>
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
