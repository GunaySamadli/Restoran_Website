import { React } from 'react';
import '../../styles/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Popular = () => {

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className="tab-items">
                        <div className="tab-item">
                            <img src='https://technext.github.io/restoran/img/menu-7.jpg' alt="" />
                            <div className="tab-item-info">
                                <h5 className="tab-item-title">
                                    <span>Shripm Burger</span>
                                    <span className="tab-text-primary">$220</span>
                                </h5>
                                <small>lorem ipsum</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="tab-items">
                        <div className="tab-item">
                            <img src='https://technext.github.io/restoran/img/menu-7.jpg' alt="" />
                            <div className="tab-item-info">
                                <h5 className="tab-item-title">
                                    <span>Shripm Burger</span>
                                    <span className="tab-text-primary">$220</span>
                                </h5>
                                <small>lorem ipsum</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="tab-items">
                        <div className="tab-item">
                            <img src='https://technext.github.io/restoran/img/menu-7.jpg' alt="" />
                            <div className="tab-item-info">
                                <h5 className="tab-item-title">
                                    <span>Shripm Burger</span>
                                    <span className="tab-text-primary">$220</span>
                                </h5>
                                <small>lorem ipsum</small>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="tab-items">
                        <div className="tab-item">
                            <img src='https://technext.github.io/restoran/img/menu-7.jpg' alt="" />
                            <div className="tab-item-info">
                                <h5 className="tab-item-title">
                                    <span>Shripm Burger</span>
                                    <span className="tab-text-primary">$220</span>
                                </h5>
                                <small>lorem ipsum</small>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Popular;