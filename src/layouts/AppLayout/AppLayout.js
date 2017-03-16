import Nav from 'Components/Nav'
import React from 'react'
import 'antd/dist/antd.min.css'
export const AppLayout = ( props ) => (
  <div className="templates-wrapper">
    <Nav/>
    {props.children}
  </div>
)

AppLayout.propTypes = {
  children: React.PropTypes.any
}
export default AppLayout
