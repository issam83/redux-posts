import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import PostList from './containers/postList'
import PostForm from './containers/postForm'
import Post from './containers/post'
import NotFound from './components/notFound'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                     <Route path='/' component={PostList}/>
                     <Route path='createPost' component={PostForm}/>
                     <Route path='post/:id' component={Post}/>
                     <Route path='*' component={NotFound}/>
                </Router>
            </div>
        )
    }
}
