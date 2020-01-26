import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './blog.scss';

export default class Blog extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="about-container">
                        <Row className="about-info">
                            Hello Blog!
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
