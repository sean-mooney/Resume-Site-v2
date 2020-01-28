import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './contact.scss';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, emailSent: false }
        this.sendEmail = this.sendEmail.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    sendEmail() {
        this.setState({ error: null });
        var validation = this.validateForm();
        if (!validation.valid) {
            this.setState({ error: validation.error });
            return;
        }
        let name = document.getElementById("txt-name").value;
        let email = document.getElementById("txt-email").value;
        let phone = document.getElementById("txt-phone").value;
        let message = document.getElementById("txt-message").value;

        const url = window.location.hostname.includes("localhost") ? "/php/send_form_email.php" : "/newnew/php/send_form_email.php";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Content: 'application/x-www-form-urlencoded'
            },
            data: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message
            })
        }).then(res => {
            if (res && res.status === 200)  {
                this.setState({emailSent: true});
                return;
            }
            alert("Sorry, something went wrong. Please try again in a little bit.");
        }).catch(err => {
            alert("Sorry, something went wrong. Please try again in a little bit.");
        })
    }

    validateForm() {
        const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        let isValid = { valid: true, error: [] };

        let name = document.getElementById("txt-name").value;
        let email = document.getElementById("txt-email").value;
        let message = document.getElementById("txt-message").value;

        if (!name || !name.trim().length > 0) isValid.error.push({ field: "name", message: "Please fill out your name" });
        if (!email || !email.trim().length > 0 || !emailFormat.test(email)) { isValid.error.push({ field: "email", message: "Please enter a valid email" }); }
        if (!message || !message.trim().length > 0) isValid.error.push({ field: "message", message: "Please enter a message" });
        if (isValid.error.length > 0) isValid.valid = false;

        return isValid;
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="contact-container">
                        {!this.state.emailSent ?
                            <Row className="contact-info">
                                <div className="contact-title">Get in touch</div>
                                <div className="contact-short-description">Thank you for your interest! Please feel free to contact me for any work you might have.</div>
                                <div className="contact-inputs">
                                    <div className="contact-input-container">
                                        <div className="contact-label">Name* {this.state.error && this.state.error.find((error) => { return error.field === "name" }) ? <span className="contact-form-error">- {this.state.error.find((error) => { return error.field === "name" }).message}</span> : ""}</div>
                                        <div className="contact-input">
                                            <input id="txt-name" type="text" placeholder="Enter name" ></input>
                                        </div>
                                    </div>
                                    <div className="contact-input-container">
                                        <div className="contact-label">Email* {this.state.error && this.state.error.find((error) => { return error.field === "email" }) ? <span className="contact-form-error">- {this.state.error.find((error) => { return error.field === "email" }).message}</span> : ""}</div>
                                        <div className="contact-input">
                                            <input id="txt-email" type="text" placeholder="Enter email" ></input>
                                        </div>
                                    </div>
                                    <div className="contact-input-container">
                                        <div className="contact-label">Phone</div>
                                        <div className="contact-input">
                                            <input id="txt-phone" type="text" placeholder="Enter phone" ></input>
                                        </div>
                                    </div>
                                    <div className="contact-input-container">
                                        <div className="contact-label">Message* {this.state.error && this.state.error.find((error) => { return error.field === "message" }) ? <span className="contact-form-error">- {this.state.error.find((error) => { return error.field === "message" }).message}</span> : ""}</div>
                                        <div className="contact-input">
                                            <textarea id="txt-message" type="text" placeholder="Enter message" ></textarea>
                                        </div>
                                    </div>
                                    <div className="contact-input-container">
                                        <div className="contact-input">
                                            <div id="btn-submit" className="seans-button" onClick={() => this.sendEmail()}>Send</div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            :
                            <Row className="contact-info">
                                <div className="contact-title">Thank you!</div>
                                <div className="contact-short-description">Your message has been sent, I'll be in touch soon. <br/><br/> -Sean</div>
                            </Row>
                        }
                    </Container>
                </div>
            </div>
        );
    }
}
