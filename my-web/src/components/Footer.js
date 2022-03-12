import React from 'react';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-up">
                <Container>
                    <Row>
                        <Col xl={3} md={6}>
                            <div className="footer-item">
                                <h4>
                                    Company
                                </h4>
                                <ul>
                                    <li><a href="*">About as</a></li>
                                    <li><a href="*">Contact Us</a></li>
                                    <li><a href="*">Reservation</a></li>
                                    <li><a href="*">Privacy Policy</a></li>
                                    <li><a href="*">Terms & Condition</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} md={6}>
                            <div className="footer-item">
                                <h4>
                                    Contact
                                </h4>
                                <ul>
                                    <li><i className="fa-solid fa-location-dot"></i>123 Street, New York, USA</li>
                                    <li><i className="fa-solid fa-phone"></i>+012 345 67890</li>
                                    <li><i className="fa-solid fa-envelope"></i>info@example.com</li>
                                </ul>
                                <div className="socialMedia">
                                    <a href="*"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="*"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="*"> <i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="*"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} md={6}>
                            <div className="footer-item">
                                <h4>
                                    Opening
                                </h4>
                                <h5>Monday - Saturday</h5>
                                <p>09AM - 09PM</p>

                                <h5>Sunday</h5>
                                <p>10AM - 08PM</p>
                            </div>
                        </Col>
                        <Col xl={3} md={6}>
                            <div className="footer-item">
                                <h4>
                                    Newsletter
                                </h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="form-sign">
                                    <input className="form-control" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary sign">SignUp</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-down">
                <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
            </div>

        </div>
    )
}

export default Footer;