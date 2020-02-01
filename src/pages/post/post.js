import React from 'react';
import { Container } from 'react-bootstrap';
import './post.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

const apiUrl = "https://sean-mooney-blog.herokuapp.com/blog";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { post: null, loadPage: false, id: this.props.match.params.id };
        this.getPostData = this.getPostData.bind(this);
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
            <div className="page-container blog">
                <div className="content-container">
                    <Container className="blog-container">
                        {this.state.loadPage ?
                            <div className="blog-post-wrapper">
                                {this.state.post ?
                                    <div className="blog-post-container">
                                        <div className="blog-post-title">
                                            {this.state.post.title}
                                        </div>
                                        <div className="blog-post-upload-date">
                                            {moment(new Date(this.state.post.uploadDate)).format("D MMM, YYYY")} ({moment(new Date(this.state.post.uploadDate)).fromNow()})
                                        </div>
                                        <div className="blog-post-content">
                                            {!this.state.post.content ||
                                                this.state.post.content.map((block, i) => {
                                                    var showAd = i > 0 && i % 5 === 0;
                                                    var displayElement = null;
                                                    switch (block.type) {
                                                        case "code":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-code">
                                                                    Code block coming soon
                                                                </div>
                                                            )
                                                            break;
                                                        case "link":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-link-container" style={{ "textAlign": `${block.align ? block.align : 'left'}` }}>
                                                                    <a className="blog-post-block-link" href={block.link}>{block.content}</a>
                                                                </div>
                                                            )
                                                            break;
                                                        case "button":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-button-container" style={{ "textAlign": `${block.align ? block.align : 'left'}` }}>
                                                                    <a className="blog-post-block-link" href={block.link} target="_blank" rel="noopener noreferrer">
                                                                        <div className="seans-button">
                                                                            {block.content}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            )
                                                            break;
                                                        case "html":
                                                            displayElement = (
                                                                <div dangerouslySetInnerHTML={{ __html: block.content }} className="blog-post-block blog-post-block-custom-html">
                                                                </div>
                                                            )
                                                            break;
                                                        case "image":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-image">
                                                                    <img className="blog-post-img" alt="" src={block.content} />
                                                                </div>
                                                            )
                                                            break;
                                                        case "title":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-title">
                                                                    {block.content}
                                                                </div>
                                                            )
                                                            break;
                                                        case "sub-title":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-sub-title">
                                                                    {block.content}
                                                                </div>
                                                            )
                                                            break;
                                                        case "spacer":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-spacer"></div>
                                                            )
                                                            break;
                                                        case "emphasized":
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-emphasized">
                                                                    {block.content}
                                                                </div>
                                                            )
                                                            break;
                                                        case "text":
                                                        default:
                                                            displayElement = (
                                                                <div className="blog-post-block blog-post-block-text">
                                                                    {block.content}
                                                                </div>
                                                            )
                                                            break;
                                                    }
                                                    return (
                                                        <div key={`block-${i}`} className="blog-post-block-container">
                                                            {!showAd || 
                                                            <div className="blog-post-ad">
                                                                ADDDDDDDDDD
                                                            </div>
                                                            }
                                                            {displayElement}
                                                        </div>
                                                    )
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