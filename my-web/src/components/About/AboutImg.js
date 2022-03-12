import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import '../../styles/About.css'

const AboutPicture = () => {
    return (
        <div className='about-picture'>
            <Row>
                <Col xs={7}>
                    <img src="https://technext.github.io/restoran/img/about-1.jpg" alt="" />
                </Col>
                <Col xs={5}>
                    <img src="https://technext.github.io/restoran/img/about-2.jpg" alt="" />
                </Col>
            </Row>
            <Row>
                <Col xs={5} >
                    <img src="https://technext.github.io/restoran/img/about-1.jpg" alt="" />
                </Col>
                <Col xs={7}>
                    <img src="https://technext.github.io/restoran/img/about-2.jpg" alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default AboutPicture