import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TopNavbar(props) {
  return (
    <Navbar className="bg-purple" expand="lg">
      <Navbar.Brand href="/">
        Tony <AiFillHeart /> Kaitlin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {props.home ? (
            <Nav.Link className=" active" href="/">
              Home
            </Nav.Link>
          ) : (
            <Nav.Link href="/">Home</Nav.Link>
          )}
          {props.about ? (
            <Nav.Link className=" active" href="/about">
              Our Story
            </Nav.Link>
          ) : (
            <Nav.Link href="/about">Our Story</Nav.Link>
          )}
          {props.info ? (
            <Nav.Link className=" active" href="/info">
              Wedding Info
            </Nav.Link>
          ) : (
            <Nav.Link href="/info">Wedding Info</Nav.Link>
          )}
          {props.picturewall ? (
            <Nav.Link className=" active" href="/picturewall">
              Picture Wall
            </Nav.Link>
          ) : (
            <Nav.Link href="/picturewall">Picture Wall</Nav.Link>
          )}
          {props.registration ? (
            <Nav.Link className=" active" href="/registration">
              Registration
            </Nav.Link>
          ) : (
            <Nav.Link href="/registration">Registration</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
