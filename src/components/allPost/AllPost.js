import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from '../post/Post';
import EditPost from '../editPost/EditPost';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditPost post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);