const initialState = {
    userId: 1,
    likedPosts: [],
    isLogged: false,
    userName: 'fussygeekey',
    password: '1234'
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};