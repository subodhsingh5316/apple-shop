import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from "react-bootstrap";
import{Link} from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BookShop</Navbar.Brand>
            </LinkContainer>
          <Nav className="ml-auto">
            <Nav.Link href='/cart/:id?'><i className="fas fa-shopping-cart "></i> Cart</Nav.Link>
            <LinkContainer to='/signin'>
              <Nav.Link><i className="fas fa-user"></i> SIGNIN</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;