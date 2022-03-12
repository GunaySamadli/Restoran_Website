import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import '../../styles/About.css';
import AboutImg from '../About/AboutImg.js'

const About = (props) => {
    return (
        <div className='about'>
            <Container>
                <Row>
                    <Col md={6}>
                        <AboutImg />
                    </Col>
                    <Col md={6}>
                        <div className="about-info">
                            <h5>About Us</h5>
                            <h1 >
                                Welcome to
                                <i className="fa fa-utensils"></i>
                                Restoran
                            </h1>
                            <p>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                            </p>
                            <p>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="about-info-counter">
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className='about-info-counter-body'>
                                            <h1>
                                                <CountUp end={15} />
                                            </h1>
                                            <div className='counter-info'>
                                                <p >Years of</p>
                                                <h6>Experience</h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className='about-info-counter-body'>
                                            <h1>
                                                <CountUp end={50} />
                                            </h1>
                                            <div className='counter-info'>
                                                <p >Years of</p>
                                                <h6>Experience</h6>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <a className='btn btn-primary' style={{ backgroundColor: '#FEA116', border: '#FEA116' }} href="*">Read More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About