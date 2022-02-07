import React from 'react'
import {connect} from 'react-redux'
import {createPost} from '../redux/actions/postActions'
import Alert from './Alert'
import {showAlert} from '../redux/actions/appActions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state
        this.props.showAlert(null)

        if(!title.trim()) {
            this.props.showAlert('Внимание! Вы не ввели заголовок поста!')
            return 
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost)
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev,
            ...{[event.target.name]: event.target.value}        
        }))
    }

    render() {
        const isVissible = this.props.app.alert;
        console.log(this.props.app)
    
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        name="title"
                    />
                </div>
                {isVissible ? <Alert /> : ''}
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
        
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)