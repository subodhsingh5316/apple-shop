import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselScreen = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner"  >
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/airpods.jpg" alt="airpods" style={{ width: "100px" }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/phone.jpg" alt="phone" style={{ width: "100px" }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/camera.jpg" alt="cannon" style={{ width: "100px" }} />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="false" style={{ backgroundColor: 'red' }}></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon " aria-hidden="false" style={{ backgroundColor: 'red' }}></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/airpods.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/phone.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/airpods.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    )
}

export default CarouselScreen
