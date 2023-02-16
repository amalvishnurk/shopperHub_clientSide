import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaShopify } from "react-icons/fa";
import { IconContext } from "react-icons";

function Header() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='brand'>
          <IconContext.Provider value={{ className: "shared-class", size: 50 }}>
            <FaShopify />
          </IconContext.Provider>
          &nbsp;<em style={{ fontSize: '35px' }}><b></b>Shoppers Hub</em>
        </Navbar.Brand>
        <Nav.Link href="/cart"><i className="fa-solid fa-cart-plus"></i> &nbsp;Cart </Nav.Link>
      </Container>
    </Navbar>
  )
}

export default Header