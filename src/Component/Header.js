import React,{ useState   } from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import{Link} from 'react-router-dom'
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
function Header({props}) {

  const [show, setShow] = useState(false);
  const [ isSignIn, isSetSignIn ] = useState(false)
  const [ isSignUp, setIsSignUp ] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BookShop</Navbar.Brand>
            </LinkContainer>
          <Nav className="ml-auto">
            <Nav.Link href='/cart/:id?'><i className="fas fa-shopping-cart "></i> Cart</Nav.Link>
            <LinkContainer to='' onClick={handleShow}>
              <Nav.Link><i className="fas fa-user"></i> SIGNIN</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Modal centered show= {show} onHide={handleClose}>
      <Link onClick={handleClose} variant='light' className=' 'style={{marginLeft:'90%' ,marginRight:"10px", width:'20px',marginBottom:'-20px' }} Link><i class="fas fa-times my-2 "></i></Link>
        {
          isSignUp 
          ? (
            <Signin isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
          ) : (
            
            <Signup />
          )
        }
      </Modal>
    </div>
  );
}

export default Header;