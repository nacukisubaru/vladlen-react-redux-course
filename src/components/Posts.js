import React from "react";
import {connect} from 'react-redux'
import Post from "./Post";

const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPosts.map((post) => <Post post={post} key={post}></Post>)
}

//хелпер ф-ции mapStateToProps состояние конвертирует в propsы для компонента Posts 
//передаем в connect
const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

//connect функция высокого порядка с её помощью мы связываемся со store 
//из Posts который подключен в App который обернут в провайдер и получает store
export default connect(mapStateToProps, null)(Posts)