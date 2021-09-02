import { Link } from "react-router-dom";

const LocalFeedList = ({ posts }) => {
    if (!posts.length) {
        return (
            <p>
                No posts
            </p>
        );
    }

    return (
        <ul>
            {/* {props.posts.map(i => <Post user={user[i]} />)} */}
        </ul>
    );
};

export default LocalFeedList;