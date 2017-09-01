import React from 'react'
import PropTypes from 'prop-types'
import './footer.less'

export default function Footer(props){
  return (
    <footer {...props} className="cyd-footer ant-layout-footer">
      <h3 style={{color:'white'}} className="text-center">Copyright © 2017 zido All Rights Reserved</h3>
    </footer>
  )
}

Footer.propTypes = {
  isMode:PropTypes.bool,
}