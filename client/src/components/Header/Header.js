import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css";
// import logo from '../images/logo.jpeg';



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
        {/* <Navbar.Brand href="#home">San Jose Airport</Navbar.Brand> */}
        <Navbar.Brand>
          <div className="logo">
          

          </div>
  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="topnav-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            
            {

            }
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