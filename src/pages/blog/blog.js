import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './blog.scss';
import listReactFiles from 'list-react-files';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        // var fs = require('fs');
        // var files = fs.readdirSync('/blogposts/');
        // console.log(files);
        //Maybe have a manifest.json that has a list of all blog posts then use href to get the file and load the data
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="blog-container">
                        <Row className="blog-post-line">
                            Hello Blog!
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
