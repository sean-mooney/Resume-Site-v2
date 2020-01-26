import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './resume.scss';

export default class Resume extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="about-container">
                        <Row className="about-info">
                            Hello Resume!
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
