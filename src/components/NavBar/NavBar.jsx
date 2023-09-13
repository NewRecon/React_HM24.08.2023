import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<Navbar expand="lg" bg="dark" data-bs-theme="dark">
			<Container fluid>
				<Navbar.Brand href="#">Java Workout</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="about">About Java</Nav.Link>
						<Nav.Link href="galery">Galery</Nav.Link>
						<NavDropdown title="Roadmap" id="navbarScrollingDropdown">
							<NavDropdown.Item href="java-dev">
								Java dev
							</NavDropdown.Item>
							<NavDropdown.Item href="spring-dev">
								Spring dev
							</NavDropdown.Item>
						</NavDropdown>
						<>
						<Button variant="primary" onClick={handleShow}>
							Contacts
						</Button>
						<Offcanvas show={show} onHide={handleClose}>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Contacts</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								Some text as placeholder. In real life you can have the elements you
								have chosen. Like, text, images, lists, etc.
							</Offcanvas.Body>
						</Offcanvas>
						</>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
