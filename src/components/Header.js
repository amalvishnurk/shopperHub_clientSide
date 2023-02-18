import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GiShoppingCart } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from 'react-scroll';
import './header.css'


function Header() {



  return (
    <div className='container'>
      <Navbar className='header mb-3' >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#link">Women</Nav.Link>
            <Link to="myDiv" smooth={true} ><Nav.Link href="#link">Contact</Nav.Link></Link>
          </Nav>
          <Nav.Link className='cartIcon' href="/cart">
            <IconContext.Provider value={{ className: "shared-class", size: 50 }}>
              <GiShoppingCart />
            </IconContext.Provider>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
    // <Navbar className='container text-dark mb-3' bg="secondary" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="/" className='brand'>
    //       {/* <IconContext.Provider value={{ className: "shared-class", size: 50 }}>
    //         <FaShopify />
    //       </IconContext.Provider> */}
    //       Home
    //       {/* &nbsp;<em style={{ fontSize: '35px' }}><b></b>Home</em> */}
    //     </Navbar.Brand>
    //     <Nav.Link href="/cart"><i className="fa-solid fa-cart-plus"></i> &nbsp;Cart </Nav.Link>
    //   </Container>
    // </Navbar>
  )
}

export default Header