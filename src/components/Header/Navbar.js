import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

 export default Navbar=()=> {
  return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> <Link to="/" style={{textDecoration:"none",color:"#333"}}>Miore</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{width:"50%"}}>
            <div className='nav-link'><Link style={{textDecoration:"none",color:"#333"}} to="/about">About Us</Link></div>
            <div className='nav-link'><Link style={{textDecoration:"none",color:"#333"}} to="/contact">Contact Us</Link></div>
            
            
          </Nav>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Button  variant="outline-success">Sign In</Button>
          <Button style={{marginLeft:"1rem"}} variant="outline-danger">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

