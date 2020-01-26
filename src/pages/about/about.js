import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import me from '../../images/me.jpg'
import './about.scss';

export default class About extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="about-container">
                        <Row className="about-info">
                            <Col xs={12} sm={6} className="about-photo">
                                <img src={me}></img>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="about-title">
                                    Sean Mooney
                                </div>
                                <div className="about-sub-title">
                                    Full-Stack Engineer
                                </div>
                                <hr></hr>

                                <div className="about-text">
                                    <span className="italic">Programming is like solving a puzzle, you have all the pieces in front of you just need to put them together.</span>
                                    <br/>
                                    <br/>
                                    I've always enjoyed programming from an early age. When I was 11, I taught myself how to make my own video games and
                                    through the years have moved on to web, mobile, and back-end development.
                                    <br/>
                                    <br/>
                                    Currently, I'm looking to contribute in a team environment as a full-stack developer.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
