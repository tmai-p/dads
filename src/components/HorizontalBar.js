import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import dads_logo from '../dads_logo.jpg'

function HorizontalBar() {
    const isHidden = true;
  return (
    <div className="sticky-top">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <a className="navbar-brand" href="/dads">
              <img 
                src={dads_logo}
                className="d-inlinel-block align-top"
                alt="DAD'S Logo"
                width={200}
                height={75}
              />
              <span style={{ display: isHidden ? "none" : "block" }}>
                Dad's logo
              </span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/dads">Home</Nav.Link>
              <Nav.Link href="/dads/about">About</Nav.Link>
              <Nav.Link href="/dads/service">Service</Nav.Link>
              <Nav.Link href="/dads/contact">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default HorizontalBar
