import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Cart.css';
import { CartData } from './CartData';

const Cart = () => {
    return (
        <div className="cart">
            <Container>
                <Row>
                    {CartData.map((cart, index) => {
                        return (
                            <Col lg={3} md={6} key={index} >
                                <div className="cart-bodies">
                                    <i className={cart.icon}></i>
                                    <h5>
                                        {cart.title}
                                    </h5>
                                    <p className='cart-desc'>
                                        {cart.desc}
                                    </p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>

    )
}

export default Cart;