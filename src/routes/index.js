import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from '../components/App'
import Model from '../components/Model'

export const createRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/app" component={Model}/>
  </Router>
)

export default createRoutes
