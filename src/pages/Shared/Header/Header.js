import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {
              user && <>
                <Nav.Link as={Link} to="/addusers">AddUsers</Nav.Link>
                <Nav.Link as={Link} to="/manage">ManageServices</Nav.Link>
              </>
            }
            {
              user ?

                <button onClick={handleSignOut}>Sign out</button>
                :
                <Nav.Link eventKey={2} as={Link} to="/login">
                  Login
                </Nav.Link>

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
};

export default Header;