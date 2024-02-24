import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Appbar() {
  return (
    <Navbar bg="info" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"> <img className="brand_img" src="https://images.vexels.com/media/users/3/194841/isolated/preview/98cc9b32c7e9a15b919e617bcebbec46-camouflage-army-helmet.png"/> BroveMaterials</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">  <Button variant="warning">Home</Button> </Nav.Link>
          <Nav.Link href="/reference"> <Button variant="warning">Reference</Button></Nav.Link>
          <Nav.Link href="/notification"> <Button variant="warning">Notification</Button></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
