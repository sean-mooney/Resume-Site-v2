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
                            <Col xs={12} lg={6} className="about-photo">
                                <img src={me} alt="me"></img>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className="about-title">
                                    Sean Mooney
                                </div>
                                <div className="about-sub-title">
                                    Full-Stack Engineer
                                </div>
                                <hr></hr>

                                <div className="about-text">
                                    <span className="italic">Programming is an art, it's like solving a puzzle that has limitless potential. No matter what you create it will always be truly unique.</span>
                                    <br/>
                                    <br/>
                                    I've always enjoyed programming from an early age. When I was 11, I taught myself how to make my own video games.
                                    Through the years, I have moved on to learn web, mobile, and back-end development. I'm interested in taking on more of a back-end role to flesh out my abilities as a full-stack developer.
                                    <br/>
                                    <br/>
                                    When I'm not working on a project, I like to fill my time biking, finding new breweries and bars in my area, and enjoying what life has to offer.
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
