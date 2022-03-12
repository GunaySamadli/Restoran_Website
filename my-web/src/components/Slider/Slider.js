import React, { Component } from "react";
import Slider from "react-slick";
import '../../styles/Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SliderData } from "./SliderData";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slider">
                <div className="slider-info">
                    <h5 className="slider-title"> Testimonial</h5>
                    <h1 className="slider-head">Our Clients Say!!!</h1>
                </div>
                <Container>
                    <Row style={{ alignItems: 'center' }}>
                        <Slider {...settings}>
                            {SliderData.map((slide, index) => {
                                return (
                                    <Col key={index}>
                                        <Card style={{ borderRadius: '2px', marginRight: '20px' }}>
                                            <div className="testimonial">
                                                <div className="testimonial-icon">
                                                    <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                                </div>
                                                <p>{slide.description}</p>
                                                <div className="testimonial-img-name">
                                                    <img src={slide.image} alt='' />
                                                    <div className="testimonial-name-profession">
                                                        <h5>{slide.name}</h5>
                                                        <small>{slide.profession}</small>
                                                    </div>
                                                </div>

                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Slider>
                    </Row>
                </Container>
                {/* <Slider {...settings}>
                    {SliderData.map((slide, index) => {
                        return (
                            <img src={slide.image} alt='' />
                        )
                    })}
                </Slider> */}
            </div>
        );
    }
}