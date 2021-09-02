import Post from "../Post/Post";

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
            {posts.map(post => <li><Post post={post} key={post.id} /></li>)}
        </ul>
    );
};

export default LocalFeedList;