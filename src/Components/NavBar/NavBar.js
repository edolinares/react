import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CartWidget } from "../Cart/CartWidget";


export const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/reactapp-9b014.appspot.com/o/k2summit.png?alt=media&token=9395c964-f202-47b6-971a-4149c8ca4234"
            width="64"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/category/Glamping">
            Glamping
          </Nav.Link>
          <Nav.Link as={Link} to="/category/Trekking">
            Trekking
          </Nav.Link>
          <Nav.Link as={Link} to="/category/Avistamiento">
            Avistamiento
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
