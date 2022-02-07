import { CREATE_POST } from "../postsReducer"

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}