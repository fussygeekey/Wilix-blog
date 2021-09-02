import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <li className="list-group-item mb-1">
            <h4>
                {post.title}
            </h4>
            <p>
                {post.text}
            </p>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <button to="/" className="btn p-0">
                        ❤️
                    </button>
                </li>
                <li className="list-group-item">
                    <Link to="/register" className="text-decoration-none">
                        Learn more
                    </Link>
                </li>
            </ul>
        </li>
    );
};

export default Post;