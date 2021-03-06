import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../redux/actions/postActions";
import Loader from "./Loader" 

export default () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);
    const loader = useSelector((state) => state.app.loadding);
    if (loader) {
      return <Loader />
    } else {
        if (!posts.length) {
            return (
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch(fetchPosts())}
                >
                    Загрузить
                </button>
            );
        }
    }
    return posts.map((post) => <Post post={post} key={post.id}></Post>);
};
