import React from 'react';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../../redux/actions';
import Post from "../Post/Post";

const GlobalFeedList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const posts = useSelector(state => state.posts.posts);

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