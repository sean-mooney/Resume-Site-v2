import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './experience.scss';
import *  as myExperience from './experience.json';
import moment from 'moment';

import pdf from '../../documents/SeanMooneyResume.pdf';

export default class Experience extends React.Component {
    render() {
        const imgPath = window.location.hostname.includes("localhost") ? "/images/" : "/newnew/images/";
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

                        <div className="exp-section-title">Personal Projects</div>
                        <Row className="exp-work-history">
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">Asteroids HTML</div>
                                <div className="exp-personal-work-stack">HTML/CSS, JavaScript</div>
                                <div className="exp-short-description">
                                    Recreation of the classic game "Asteroids" using only HTML, CSS, and Vanilla JavaScript. The idea for this project was born from wanting to create more dynamic web pages with moving elements. This is a proof of concept that many elements can be moving and animated on a page and has given me a plethora of ideas for future projects
                                </div>
                                <div className="exp-personal-project-button-container">
                                    <a href="https://github.com/sean-mooney/AsteroidsHtml" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            GitHub
                                        </div>
                                    </a>
                                    <a href="/demos/asteroids/index.html" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            Demo
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">Map512</div>
                                <div className="exp-personal-work-stack">HTML/CSS, JavaScript, React, Python</div>
                                <div className="exp-short-description">
                                    Do512 is a great resource for happenings all around Austin. However, there is no map view of all the events so as someone new to Austin, there was little to no way to find events near me specifically. So taking this idea, I built a data scraper using Python and retrieved the data from Do512's website. Then, in React, I created a map view and populated it with pins for venues hosting events. I then added filters and detailed event/venue views to view more information.
                                </div>
                                <div className="exp-personal-project-button-container">
                                    <a href="https://github.com/sean-mooney/map512" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            GitHub
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">Sean-Mooney.com</div>
                                <div className="exp-personal-work-stack">HTML/CSS, JavaScript, React, PHP</div>
                                <div className="exp-short-description">
                                    I have done a lot of front-end work and wanted to apply the knowledge I have obtained through the years into my own project. This website is a small representation of my abilities and a way to showcase my skills to the world beyond a paper resume.
                                </div>
                                <div className="exp-personal-project-button-container">
                                    <a href="https://github.com/sean-mooney/Resume-Site-v2" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            GitHub
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">Siege Line Tower Wars</div>
                                <div className="exp-personal-work-stack">Unity3D, C#, Blender, Photoshop</div>
                                <div className="exp-short-description">
                                    This personal project stemmed from my love of the Warcraft 3 custom mod "Line Tower Wars". You are able to build towers and enemies will come from the north with the goal of reaching the southern most point. You have to maze your towers so that the enemies will take the most amount of damage and not reach the south. This taught me  how to implement anti-cheat practices, how to provide a concurrent game across a network, and calculate AI trajectories for objects to travel along to avoid obstacles.
                                </div>
                                <div className="exp-personal-project-button-container">
                                    <a href="https://github.com/sean-mooney/Siege-Tower-Defense" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            GitHub
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">CPMooney.com</div>
                                <div className="exp-personal-work-stack">HTML, CSS, JavaScript, SquareSpace</div>
                                <div className="exp-short-description">
                                    Freelance project for a family member using SquareSpace. While SquareSpace provides a handy framework for quickly devleoping websites, it comes with a lot of limitations. During development, I found myself trying to hack how SquareSpace worked to deliver on the final product. These hacks included: custom pagination and custom buttons that can execute custom JavaScript on click to name a few.
                                </div>
                                <div className="exp-personal-project-button-container">
                                    <a href="https://cpmooney.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            Website
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">Project Xavier</div>
                                <div className="exp-personal-work-stack">HTML/CSS, JavaScript, Meteor, Express, MongoDB</div>
                                <div className="exp-short-description">
                                    This is my first full-stack application, created during my time with the A100 Certified Developer program. My team and I, consisting of 5 people including me, worked in an Agile environment and set out to make a working prototype for a partner company's web app.
                                </div>
                            </Col>
                            <Col className="exp-personal-item" xs={12}>
                                <div className="exp-work-title">Whack-A-Mole</div>
                                <div className="exp-personal-work-stack">Java, Android, Android Studio</div>
                                <div className="exp-short-description">
                                    While I was attending Norwalk Community College, I signed up for a mobile development course. For our final project, we had to pick a mobile platform and develop our own app for it. Using what I had learned from the course and my previous programming knowledge, I worked on a remake of the classic carnival game, "Whack-a-Mole", for Android built in Android Studio. It features pause and start functionality, score keeping, and a new game function. It was my first finished mobile application and I scored 100 on my final with it.
                                </div>
                                <div className="exp-personal-project-button-container">
                                    <a href="https://github.com/sean-mooney/whack-a-mole" target="_blank" rel="noopener noreferrer">
                                        <div className="seans-button">
                                            GitHub
                                        </div>
                                    </a>
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
                                                        {stack.iconIsImg ? <img className="exp-icon" src={imgPath + stack.icon} alt={stack.language} /> : <i className={`${stack.icon} exp-icon`}></i>}
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
                                                        {stack.iconIsImg ? <img className="exp-icon" src={imgPath + stack.icon} alt={stack.language} /> : <i className={`${stack.icon} exp-icon`}></i>}
                                                        <div className="exp-label">{stack.language}</div>
                                                        <div className="exp-years">{stack.years}</div>
                                                    </Col>
                                                )
                                            })}
                                        </Row>}
                                </div>
                            );
                        }))}
                        <div className="exp-resume-button-container">
                            <a href={pdf} target="_blank" rel="noopener noreferrer">
                                <div className="seans-button">
                                    View resume
                                </div>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
