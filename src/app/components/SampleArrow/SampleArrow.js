import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'antd'
import './SampleArrow.scss'
export default function SampleNextArrow(props) {
  const {className, style, onClick,type} = props
  return (
    <div
      className={'sample-arrow '+className}
      style={{...style, display: 'block',}}
      onClick={onClick}
    >
      <Icon type={type} style={{zIndex:10}}/>
    </div>
  )
}

SampleNextArrow.defaultProps = {
  className:'',
  onClick:()=>{},
}

SampleNextArrow.propTypes = {
  className:PropTypes.string,
  style:PropTypes.object,
  onClick:PropTypes.func,
  type:PropTypes.string,
}