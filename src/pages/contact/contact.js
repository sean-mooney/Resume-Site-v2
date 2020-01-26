import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './contact.scss';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="about-container">
                        <Row className="about-info">
                            Hello Contact!
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
