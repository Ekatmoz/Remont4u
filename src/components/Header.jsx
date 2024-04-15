import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return ( 
    <Navbar expand="lg" fixed='top' variant="dark">
      <Container className='logo'>
        <Navbar.Brand href="#home">
        <img
              src="/favicon.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Our logo"
              style={{ filter: 'invert(100%)', marginRight: '5px' }}
            />
          Remont4U<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Nav.Link href="#home" className='link'>O нас</Nav.Link>
            <Nav.Link href="#link" className='link'>Контакты</Nav.Link>
            <Nav.Link href="#link" className='link'>Галерея</Nav.Link>
            <Nav.Link href="#link" className='link'>Отзывы</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;