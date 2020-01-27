import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './experience.scss';
import *  as myExperience from './experience.json';
import moment from 'moment';

export default class Experience extends React.Component {
    render() {
        const imgPath = "/images/"
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="exp-container">
                        <div className="exp-section-title">Work</div>
                        <Row className="exp-work-history">
                            <Col xs={12} sm={6}>
                                <div className="exp-work-title">Baylor Scott &amp; White</div>
                                <div className="exp-sub-title italic">
                                    Software Engineer
                                    <div className="italic">April 2019 - Present ({moment([2019, 4, 1]).fromNow(true)})</div>
                                </div>
                                <div className="exp-work-stack">Azure Cloud, C#, .NET Framework, ASP.NET Core, SQL, LINQ to SQL, Angular, React, Redux, JavaScript</div>
                                <div className="exp-short-description">
                                    Baylor Scott &amp; White is the largest non-profit healthcare system in Texas. As a developer, I spear-headed the migration of our on-premise systems to Azure cloud.
                                    I also developed and adhered to strict design standards for the creation of a combined web portal between BSW and the acquired FirstCare company; as well as maintained
                                    legacy applications and portals through UI and API changes.
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div className="exp-work-title">Communico</div>
                                <div className="exp-sub-title italic">
                                    Software Engineer
                                    <div className="italic">December 2018 - December 2019 (1 year)</div>
                                </div>
                                <div className="exp-work-stack">Ionic, Angular, JavaScript, GraphQL, SQL, BootStrap, iOS, Android</div>
                                <div className="exp-short-description">
                                    Communico is an integrated suite of cloud based applications built specifically for libraries. I worked within a team to develop 
                                    a new mobile/web hybrid application using Ionic-Angular that integrated with our proprietary CMS. The app could be used as a website at a domain or 
                                    installed on your phone and used as mobile application. Each feature was modular and had to work at all sizes anywhere in the app.
                                </div>
                            </Col>
                        </Row>
                        <div className="exp-section-title">Skills</div>
                        {myExperience.experience.map(((section, i) => {
                            return (
                                <div key={`exp-section-${i}`} className="exp-section">
                                    <div className="exp-title">{section.title}</div>
                                    {section.type === "list"
                                    ?
                                    <Row className="exp-info-list no-gutters">
                                        {section.content.map((stack, j) => {
                                            return (
                                                <Col xs={6} sm={4} key={`exp-item-${j}`} className="exp-item">
                                                    {stack.iconIsImg ? <img className="exp-icon" src={imgPath + stack.icon} /> : <i className={`${stack.icon} exp-icon`}></i>}
                                                    <div className="exp-label">{stack.language}</div>
                                                    <div className="exp-years">({stack.years})</div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                    :
                                    <Row className="exp-info">
                                        {section.content.map((stack, j) => {
                                            return (
                                                <Col xs={6} sm={2} key={`exp-item-${j}`} className="exp-item">
                                                    {stack.iconIsImg ? <img className="exp-icon" src={imgPath + stack.icon} /> : <i className={`${stack.icon} exp-icon`}></i>}
                                                    <div className="exp-label">{stack.language}</div>
                                                    <div className="exp-years">{stack.years}</div>
                                                </Col>
                                            )
                                        })}
                                    </Row>}
                                </div>
                            );
                        }))}
                    </Container>
                </div>
            </div>
        );
    }
}
