import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/hero.png';
import Slider from '../components/Slider/Slider.js';
import Menu from '../components/Menu/Menu.js';
import Cart from '../components/Card/Cart';
import About from '../components/About/About.js';
import Team from '../components/Team/Team.js';
import Book from '../components/Reservation/Book.js';


function Home() {
    return (
        <>
            <div className='home'>
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="headerContainer">
                                <h1>Enjoy Our
                                    Delicious Meal</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <Link to="order">
                                    <button>Book A Table</button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="header-img">
                                <img src="https://technext.github.io/restoran/img/hero.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Cart />
            <About />
            <div className='reservation'>
                <Container fluid style={{ padding: '0' }}>
                    <Row>
                        <Col lg={6} md={12}>
                            <img src="https://technext.github.io/restoran/img/video.jpg" alt="" />
                        </Col>
                        <Col lg={6} md={12}>
                            <Book />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Team />
            <Slider />

            <Menu />
        </>

    )
}

export default Home