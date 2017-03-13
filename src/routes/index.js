import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import App from '../components/App'

export const createRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/app" component={App}/>
    </Router>
)

export default createRoutes