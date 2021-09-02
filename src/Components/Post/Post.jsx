const Post = ({ post }) => {
    return (
        <div className="card mb-1">
            <div className="card-body">
                <h4 className="card-title">
                    {post.title}
                </h4>
                <p className="card-text">
                    {post.text}
                </p>
                <button className="btn btn-primary">
                    Learn more
                </button>
            </div>
        </div>
    );
};

export default Post;