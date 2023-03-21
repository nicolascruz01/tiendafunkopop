import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NaviBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid> 
          <Navbar.Brand as={Link} to="/">
              <img
                alt="logo-funkos"
                src="src\logo.png"
                width="100"
                height="100"
                className="d-inline-block"
              />{' '} Inicio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/productos">
                Catalogo
              </Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/category/${"estandar"}`}>
                    Estandar
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/${"deluxe"}`}>
                    Deluxe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/${"llavero"}`}>
                    Llavero
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NaviBar;