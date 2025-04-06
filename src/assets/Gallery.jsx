import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { cartState } from './Context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fillters from './Fillters';

function Gallery() {
  const { state: { products,cart},dispatch , productstate:{sort,stock,searchQuery} } = cartState()
  console.log(products)

  const transformProducts=()=>{
    let sortedproducts=products
    if(sort)
    {
      sortedproducts=sortedproducts.sort((a,b)=>
      sort==="ascending"?a.price-b.price:b.price-a.price
      )
    }
    if(!stock)
    {
      sortedproducts=sortedproducts.filter((prod)=>prod.stock)
    }
    if(searchQuery)
    {
      sortedproducts=sortedproducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedproducts
  }
  return (
    <div>
      <Container className='mt-5 text-center '>
        <h1 className='fw-bold ' style={{ color: "orangered" }}>Our Gallery</h1>

        <p className='fs-5 my-5'>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>

        <Row>
          <Col md={3} className='bg-dark text-white fs-5 p-4 rounded'>

          <Fillters/>

          </Col>

          <Col md={9}>

            <div class="row row-cols-1 row-cols-md-3 g-3 gal">

              {
                transformProducts().map((item, index) => {

                  return (<Col key={index}>

                    <Card style={{ width: '20rem' }} className='border-0'>

                      <img src={item.image} className='img-fluid mx-auto d-block' alt="" />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          ₹{item.price}
                        </Card.Text>
                        {
                          cart.some((c)=>c.id==item.id)?
                          <Button variant='danger'
                          
                          onClick={()=>dispatch ({
                            type:"REMOVEFROMCAT",
                            payload:item
                          })} 
                          > Remove</Button>:
                          <Button variant="primary"
                          
                          onClick={()=>dispatch ({
                            type:"ADDTOCART",
                            payload:item
                          })} 

                          disabled={!item.stock}>
                            {!item.stock?"Out of Stock":"Add To Cart"}  </Button>}
                       
                      </Card.Body>
                    </Card>


                  </Col>)
                })
              }
            </div>

            <Button variant="dark" className=' mt-4 p-2 px-5 btn-1 mb-5'> See More</Button>

          </Col>
        </Row>


      </Container>
    </div>
  )
}

export default Gallery