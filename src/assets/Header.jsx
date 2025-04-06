import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { cartState } from './Context';
import Form from 'react-bootstrap/Form'


function Header() {
    const { state: { cart }, productdispatch } = cartState()
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/"><img src="./images/logo.png" alt="" /></Navbar.Brand>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ "width": "300px" }}
                            onChange={(e) => {
                                productdispatch({
                                    type: "filterbysearch",
                                    payload: e.target.value
                                })
                            }}
                        />

                    </Form>
                    <Nav className="">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/Gallery">Gallery</NavLink>
                        <NavLink to="/Services">Services</NavLink>
                        <NavLink to="/Contactus">Contact US</NavLink>
                        <NavLink to="/Cart"> <FaCartShopping /> <sup>{cart.length}</sup></NavLink>




                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header