import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/App'
import Model from '../components/Model'
import AppLayout from 'Layouts/AppLayout'
import Home from 'Components/Home'

export const createRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Home}/>
      <Route path="/app" component={App}/>
      <Route path="/model" component={Model}/>
    </Route>
  </Router>
)

export default createRoutes
