import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function About() {
  return (
    <div>
           
           <Container  >
            <Row className=' m-5 p-5' >
              <Col>
              <h1 style={{color:"orangered"}} className='fw-bolder'>ABOUT US</h1>
              <p className='py3 fs-5'>Full cleaning and housekeeping services for companies and households.</p>
              <p className='pb-3 fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>

              <Button variant="dark" className='p-3 px-5 text-uppercase btn-1'>read More</Button>
              </Col>
              <Col>
              <img src="./images/about-img.png" className='img-fluid mx-auto d-block w-100' alt="" />
              </Col>

            </Row>
          </Container>
    </div>
  )
}

export default About