import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './post.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import moment from 'moment';
import { withRouter, useParams } from 'react-router-dom';

const apiUrl = "https://sean-mooney-blog.herokuapp.com/blog";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { post: null, loadPage: false, id: this.props.match.params.id };
        this.getPostData = this.getPostData.bind(this);
        console.log(this.props);
    }

    componentDidMount() {
        this.getPostData();
    }

    getPostData() {
        axios.get(apiUrl + "/post/" + this.state.id).then(res => {
            if (res.status === 200) {
                this.setState({ post: res.data, loadPage: true });
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
                        {this.state.loadPage ?
                            <div className="blog-post-wrapper">
                                {this.state.post ?
                                    <div className="blog-post-container">
                                        <div className="blog-post-title">
                                            {this.state.post.title}
                                        </div>
                                        <div className="push-right blog-post-upload-date">
                                            {moment(this.state.post.uploadDate).format("D MMM, YYYY")} ({moment(this.state.post.uploadDate).fromNow()}) 
                                        </div>
                                        <div className="blog-post-content">
                                            {!this.state.post.content ||
                                                this.state.post.content.map((block, i) => {
                                                    switch (block.type) {
                                                        case "code":
                                                            return (
                                                                <div key={`block-${i}`} className="blog-post-block-code">
                                                                    Code block coming soon
                                                                </div>
                                                            )
                                                        case "link":
                                                            return (
                                                                <div key={`block-${i}`} className="blog-post-block-link-container">
                                                                    <a className="blog-post-block-link" href={block.link}>{block.content}</a>
                                                                </div>
                                                            )
                                                        case "html":
                                                            return (
                                                                <div key={`block-${i}`} dangerouslySetInnerHTML={{__html: block.content}} className="blog-post-block-custom-html">
                                                                </div>
                                                            )
                                                        case "image":
                                                            return (
                                                                <div key={`block-${i}`} className="blog-post-block-image">
                                                                    <img className="blog-post-img" alt="" src={block.content}/>
                                                                </div>
                                                            )
                                                        case "text":
                                                        default:
                                                            return (
                                                                <div key={`block-${i}`} className="blog-post-block-text">
                                                                    {block.content}
                                                                </div>
                                                            )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
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

export default withRouter(Post);