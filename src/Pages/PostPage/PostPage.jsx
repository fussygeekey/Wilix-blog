import React from "react";

const PostPage = ({ post }) => {
    return (
        <React.Fragment>
            <h2>
                {post.heading}
            </h2>
            <p>
                {post.text}
            </p>
        </React.Fragment>
    );
};

export default PostPage;