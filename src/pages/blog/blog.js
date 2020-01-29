import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './blog.scss';
import axios from 'axios';

const apiUrl = "https://sean-mooney-blog.herokuapp.com/blog";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: null, loadPage: false };
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get(apiUrl + "/posts").then(res => {
            if (res.status === 200) {
                this.setState({ posts: res.data, loadPage: true });
            }
        }).catch(err => {
            console.log("error retrieving posts", err);
        });
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="blog-container">
                        {!this.state.loadPage ||
                            <div className="blog-posts-container">
                                {this.state.posts && this.state.posts.length > 0 ?
                                    this.state.posts.map(post => {
                                        return (
                                            <Row className="blog-post-line">
                                                <div className="blog-post-card">
                                                    <div className="blog-post-title">
                                                        {post.title}
                                                    </div>
                                                    <div className="blog-post-card-bottom">
                                                        <div className="blog-post-upload-date">
                                                            {post.uploadDate}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        );
                                    })
                                    :
                                    <div className="blog-no-data">
                                        Sorry, there's nothing here :(
                            </div>
                                }
                            </div>
                        }
                    </Container>
                </div>
            </div>
        );
    }
}
