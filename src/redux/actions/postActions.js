import { CREATE_POST, FETCH_POSTS } from "../reducers/postsReducer"
import { LOADER } from "../reducers/appReducer"

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
      
        dispatch({type: LOADER, payload: true})
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await responce.json()
        dispatch({type: FETCH_POSTS, payload: json})
        dispatch({type: LOADER, payload: false})
    }
}