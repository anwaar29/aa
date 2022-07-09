import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import './Style.css'
import Content from './Content';
import data from './Details'
function Homepage() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
       
       <Link to='/home'><Navbar.Brand>Bella</Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/home'>Home</Link></Nav.Link> 
         <Nav.Link > <Link to='/fvrt'>  Favorites</Link> </Nav.Link> 
           <Nav.Link ><Link to='/shop'> Shop</Link></Nav.Link>  

          <Nav.Link ><Link to='/order'>Order</Link></Nav.Link>
          <Nav.Link ><Link to='/contact'>Contacts</Link></Nav.Link>
            <Nav.Link style={{marginLeft:"650px"}}><Link to='/profile'>Profile</Link></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </> );
  
}

export default Homepage;