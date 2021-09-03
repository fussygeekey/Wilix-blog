import React from "react";
import { connect } from "react-redux";
import Post from "../Post/Post";

const LocalFeedList = ({ posts }) => {
    return (
        <React.Fragment>
            <h2>
                Local feed
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

export default connect(state => ({ posts: state.posts.posts.filter(post => post.userId === 1) }), null)(LocalFeedList);