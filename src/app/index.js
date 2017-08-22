import React from 'react'
// import { BrowserRouter as Router,Route} from 'react-router-dom'
import enquire from 'enquire.js'
import { Layout , Menu} from 'antd'
const MenuItem = Menu.Item
import {NavLink,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const { Header, Content, Footer } = Layout

import Home from './routes/Home'

import logo from '../image/Meeting.png'
import './style/core.scss'
import './style/Nav.scss'
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
  handleClick(){
    
  }
  render(){
    return (
      <Router>
        <Layout>
          <Header>
            <ul className="nav-logo">
              <li>
                <img src={logo}/>
              </li>
              <li>
                创源地文化传播有限公司
              </li>
            </ul>
            <Menu 
              onClick={this.handleClick.bind(this)}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              theme="dark"
              className="nav"
            >
              <MenuItem key="index"><NavLink exact to="/">首页</NavLink></MenuItem>
              <MenuItem key="produce"><NavLink to="/produce">产品专栏</NavLink></MenuItem> 
              <MenuItem key="auction"><NavLink to="/auction">拍卖</NavLink></MenuItem>
              <MenuItem key="partner"><NavLink to="/paterns">商业伙伴</NavLink></MenuItem>
              <MenuItem key="news"><NavLink to="/news">时讯速览</NavLink></MenuItem>
              <MenuItem key="careers"><NavLink to="/career">招贤纳士</NavLink></MenuItem>
              <MenuItem key="about"><NavLink to="/aboutUs">关于我们</NavLink></MenuItem>
            </Menu>
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          </Content>
          <Footer/>
        </Layout>
      </Router>  
    )
  }
}