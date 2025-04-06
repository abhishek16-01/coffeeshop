import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";



function Footer() {
    return (
        <div className=''>
            <Container fluid className='bg-dark mt-3 text-white p-5  footer'>

                <Row>
                    <Col>

                        <h3 className='fw-bold '>About</h3>

                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>



                    </Col>
                    <Col>
                        <h3 className='fw-bold '>Menu</h3>

                        <ul className='list-unstyled mt-3 '>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Gallery'>Gallery</Link></li>
                            <li><Link to='/Services'>Services</Link></li>
                            <li><Link to='/ Contactus'>ContactUs</Link></li>


                        </ul>
                    </Col>



                    <Col>

                        <h3 className='fw-bold'>UsefulLink</h3>

                        <ul className='list-unstyled mt-3 '>
                        <li><Link >Adipiscing </Link></li>
                        <li><Link>Elit,sed do</Link></li>
                        <li><Link > Eiusmod</Link></li>
                        <li><Link > Tempor</Link></li>
                        <li><Link > incididunt</Link></li>
                        </ul>
                    </Col>


                     
                    <Col>

                    <h3 className='fw-bold'>Contact Us</h3>

                    <ul className='list-unstyled mt-3 '>
                        <li><a href="#"> <IoLocationSharp  className='me-2'/> Address : Loram Ipusm </a></li>
                        <li><a href="#"> <IoIosCall className='me-2' /> Call : +01 1234567890</a></li>

                        <li><a href="#"> <IoMail  className='me-2'/> Email : demo@gmail.com</a></li>
                    </ul>
                    </Col>
                </Row>
            </Container>

            <h6 className='text-center p-3 m-'> 2025 All Rights Reserved. Design Raynade Abhishek </h6>





        </div>


    )
}

export default Footer