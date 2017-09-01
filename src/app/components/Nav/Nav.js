import React from 'react'
import PropTypes from 'prop-types'
import {Menu,Icon} from 'antd'
import {Link} from 'react-router-dom'
const {Item} = Menu

import './nav.less'
export default class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isMode:this.props.isMode,
      phoneOpen:false,
    }
  }
  handleClick(){
    this.setState({
      phoneOpen:!this.state.phoneOpen,
    })
  }
  render(){
    //获取其他props
    const props = { ...this.props }
    const isMode = props.isMode
    delete props.isMode

    const {children,logo,mark,className} = this.props
    const {phoneOpen} = this.state
    return (
      <header className={className}>
        <Link to="/">
          <ul
            className={`${className}-logo`}
            >
            <li>
              <img src={logo}/>
            </li>
            <li>
              {mark}
            </li>
          </ul>
        </Link>
        
          {isMode?(
            <nav className={`${className}-phone-nav${phoneOpen ? ' open' : ''}`}>
              <div className={`${className}-phone-nav-bar`} onClick={this.handleClick.bind(this)}>
                <em/>
                <em/>
                <em/>
              </div>
              <div className={`${className}-phone-nav-text`} onClick={this.handleClick.bind(this)}>
                <Menu 
                  selectedKeys={[null]}
                  mode="inline"
                  theme="dark"
                >
                  {children}
                </Menu>
              </div>
            </nav>
          ):
          <div
            className={`${className}-nav`}
          >
            <Menu 
              selectedKeys={[null]}
              mode="horizontal"
              theme="dark"
            >
              {children}
              <Item>
                <span><Icon type="login" />登录</span>
              </Item>
            </Menu>
          </div>}
        
      </header>
    )
  }
}

Nav.defaultProps = {
  isMode:false,
  className:'header0',
}

Nav.propTypes = {
  children:PropTypes.array.isRequired,
  logo:PropTypes.string.isRequired,
  mark:PropTypes.string.isRequired,
  isMode:PropTypes.bool.isRequired,
  className:PropTypes.string.isRequired,
}

export {
  Item
}