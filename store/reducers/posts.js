import * as Data from '../../data/dumyData';

const initialState = {
    publicPosts: Data.data,
    myPosts: Data.data
};

const postsReducer = (state = initialState, action) => {
    return state;
}

export default postsReducer;