import React from 'react'
// import { BrowserRouter as Router,Route} from 'react-router-dom'
import enquire from 'enquire.js'
import { Layout } from 'antd'
import {NavLink,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav,{Item} from './components/Nav'
const { Content } = Layout

import Home from './routes/Home'
import Footer from './components/Footer'

import logo from '../image/Meeting.png'
import './style/core.less'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isMode : false
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({
        isMode
      })
    })
  }
  enquireScreen(cb) {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true)
      },
      unmatch: () => {
        cb && cb()
      },
    })
    /* eslint-enable no-unused-expressions */
  }
  render(){
    const {isMode} = this.state
    return (
      <Router>
        <Layout>
          <Nav logo={logo} mark="公司logo" isMode={isMode}>
            <Item key="index"><NavLink exact to="/">首页</NavLink></Item>
            <Item key="p1"><NavLink to="/p1">页面1</NavLink></Item> 
            <Item key="p2"><NavLink to="/p2">页面2</NavLink></Item>
            <Item key="p3"><NavLink to="/p3">页面3</NavLink></Item>
            <Item key="p4"><NavLink to="/p4">页面4</NavLink></Item>
          </Nav>
          <Content style={{marginTop:64}}>
            <Switch>
              <Route exact path="/" render={props => <Home {...props} isMode={isMode}/>}/>
            </Switch>
          </Content>
          <Footer/>
        </Layout>
      </Router>  
    )
  }
}