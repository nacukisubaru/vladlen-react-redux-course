export const CREATE_POST = 'POST/CREATE_POST'
export const FETCH_POSTS = 'POST/FETCH_POSTS'

const initialState = {
    posts: [],
    fetchedPosts: []
}

// Pure functions
// Функции которые работают только через входные параметры, легко переиспользовать
export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}