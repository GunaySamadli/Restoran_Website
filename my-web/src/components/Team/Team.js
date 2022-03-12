import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/Team.css';
import { TeamData } from "./TeamData";

const Team = () => {
    return (
        <div className='team'>
            <div className="team-info">
                <h5 className='team-title'>Team Members</h5>
                <h1 className='team-head'>Our Master Chefs</h1>
            </div>
            <Container>
                <Row>
                    {TeamData.map((team, index) => {
                        return (
                            <Col lg={3} md={6} key={index}>
                                <Card>
                                    <div className="team-body">
                                        <div className='team-image'>
                                            <img src={team.img} alt="" />
                                        </div>
                                        <h5>{team.name}</h5>
                                        <small>{team.desc}</small>
                                        <div className="team-icons">
                                            <a className="btn btn-square btn-primary mx-1" href="*"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href="*"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-primary mx-1" href="*"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Team