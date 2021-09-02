import React from 'react';
import { connect } from "react-redux";
import Post from "../Post/Post";

const GlobalFeedList = ({ posts }) => {
    return (
        <React.Fragment>
            <h2>
                Global feed
            </h2>
            {!posts.length ?
                <p>
                    No posts
                </p>
                :
                <ul className="list-group">
                    {posts.map(post => <Post post={post} key={post.id} />)}
                </ul>
            }
        </React.Fragment>
    );
};

export default connect(state => ({ posts: state.posts.posts }), null)(GlobalFeedList);