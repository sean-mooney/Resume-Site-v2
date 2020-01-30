import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './blog.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import moment from 'moment';
import { withRouter } from 'react-router-dom';

const apiUrl = "https://sean-mooney-blog.herokuapp.com/blog";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: null, loadPage: false };
        this.getPosts = this.getPosts.bind(this);
        this.openPost = this.openPost.bind(this);
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

    openPost(postId) {
        this.props.history.push('/blog/post/'+postId);
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-container">
                    <Container className="blog-container">
                        {this.state.loadPage ?
                            <div className="blog-posts-container">
                                {this.state.posts && this.state.posts.length > 0 ?
                                    this.state.posts.map(post => {
                                        return (
                                            <Row key={"blog-post-" + post.id} onClick={() => {this.openPost(post.id)}} className="no-gutters blog-post-line">
                                                <div className="blog-post-card">
                                                    <div className="blog-post-card-top">
                                                        <div className="blog-post-title">
                                                            {post.title}
                                                        </div>
                                                        <div className="push-right blog-post-upload-date">
                                                            {moment(post.uploadDate).format("D MMM, YYYY")} ({moment(post.uploadDate).fromNow()}) 
                                                        </div>
                                                    </div>
                                                    <div className="blog-post-card-bottom">
                                                        <div className="blog-post-short-desc">
                                                            {post.shortDesc}
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
                        :
                        <div className="blog-spinner">
                            <FontAwesomeIcon className="spin-icon" icon={faSpinner} />
                            One sec...
                        </div>
                        }
                    </Container>
                </div>
            </div>
        );
    }
}

export default withRouter(Blog);