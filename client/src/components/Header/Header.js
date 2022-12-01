import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const Header = () => {
  const [logout, setLogout] = React.useState(false);
  React.useEffect(() => {
    
    if(localStorage.getItem('token')) {
      
      setLogout(true);
    }
  }, [])
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">San Jose Airport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            {
              logout && <Nav.Link href="/">logout</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header