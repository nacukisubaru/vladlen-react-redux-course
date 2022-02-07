import { CREATE_POST, FETCH_POSTS } from "../postsReducer"

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await responce.json()
        dispatch({type: FETCH_POSTS, payload: json})
    }
}