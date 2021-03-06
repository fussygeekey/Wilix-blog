import { CREATE_POST, FETCH_POST } from './types';

export const createPost = post => {
    return {
        type: CREATE_POST,
        payload: post
    }
};

export const fetchPosts = () => {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        dispatch({
            type: FETCH_POST,
            payload: json
        });
    };
};

export const createTag = () => {
    
};
