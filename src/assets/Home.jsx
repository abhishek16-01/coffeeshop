import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import About from './About';
import Services from './Services';
import Contactus from './Contactus';
import Gallery from './Gallery'


function Home() {
  return (
    <div>

      <Container fluid className='p-0'>

        <div className='position-relative '>

          <img src="./images/banner-bg.png" alt="" className='w-100 img-fluid ' />

          <div class='position-absolute top-50 start-0 ps-5  translate-middle-y'>

            <h1 className='display-3'>Outstanding</h1>

            <h1 className='fw-bolder text-white display-3' > Coffee Shop</h1>
            <p className='text-white w-50 fs-5 my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>

            <Button variant="dark" className='p-3 px-5 text-uppercase btn-1'>Learn More</Button>

          </div>
        </div>
      </Container>

      <About />

      <Services />

      <Gallery/>

      {/* <Container>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h1>Testimonial</h1>
              <span>
                Eeven slightly believable. If you are going to use a passage of Lorem Ipsum, you need to

              </span>  <br /><br />

              <h4>monila "</h4>
              <p>

                many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the
              </p>
            </div>
            <div class="carousel-item">
              <h4>monila "</h4>
              <span>

                many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the
              </span>
            </div>
            <div class="carousel-item">

            <h4>monila "</h4>
              <span>

                many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All themany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some embarrassing hidden in the middle of text. All the
              </span>
            </div>
          </div>
        </div>
      </Container> */}
      <Contactus />

    </div>
  )
}

export default Home