import Post from "../Post/Post";

const OwnerData = props => {
    return (
        <div>
            <img src="" alt="" />
            <p>
                {props.ownerName}
            </p>
            <p>
                {props.publicationDate}
            </p>
        </div>
    );
};

const GlobalFeedList = ({ posts }) => {
    if (!posts.length) {
        return (
            <p>
                No posts
            </p>
        );
    }

    return (
        <ul>
            {posts.map(post => <Post post={post} key={Date().toString()} />)}
        </ul>
    );
};

export default GlobalFeedList;