import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Services() {
  return (
    <div className='bgimg'>
      <Container fluid className='text-center text-white my-5 p-5 '>
        
        <h1 style={{color:"black"}}>Services</h1>

        <p  style={{color:"black"}}>Typesetting industry lorem Ipsum is simply dummy text of the</p>

        <Row xs={10} md={3} lg={12}>
          <Col >
           
           <Card style={{width:"20rem"}} className='border-0 p-3'>

            <img src="./imgages/icon1.png" className='mx-auto d-block p-4' alt="" />

            <Card.Body>
              <Card.Title className='fs-2 mb-3'>Original Coffee</Card.Title>
              <Card.Text>
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              </Card.Text>
              <Button variant="dark" className='p-3 px-5 text-uppercase text-center btn'>read More</Button>
            </Card.Body>
           </Card>
          </Col>

          <Col>
           
           <Card style={{width:"20rem"}} className='border-0 p-3'>

            <img src="./imgages/icon1.png" className='mx-auto d-block p-4' alt="" />

            <Card.Body>
              <Card.Title className='fs-2 mb-3'>20 Coffee Flavors</Card.Title>
              <Card.Text>
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              </Card.Text>
              <Button variant="dark" className='p-3 px-5 text-uppercase btn'>read More</Button>
            </Card.Body>
           </Card>
          </Col>

          <Col>
           
           <Card style={{width:"20rem"}} className='border-0 p-3'>

            <img src="./imgages/icon1.png" className='mx-auto d-block p-4' alt="" />

            <Card.Body>
              <Card.Title className='fs-2 mb-3'>Pleasant Abient</Card.Title>
              <Card.Text>
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              </Card.Text>
              <Button variant="dark" className='p-3 px-5 text-uppercase btn'>read More</Button>
            </Card.Body>
           </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Services