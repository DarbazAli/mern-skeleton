import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>MERN Skeleton</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/users'>Users</Nav.Link>
              <Nav.Link href='/signup'>Signup</Nav.Link>
              <Nav.Link href='/signin' className='btn btn-outline-success'>
                Signin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
