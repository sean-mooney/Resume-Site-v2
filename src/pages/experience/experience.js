import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './experience.scss';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="exp-container">
                        <Row className="exp-info">
                            Hello Experience!
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
