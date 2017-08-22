import React from 'react'
import PropTypes from 'prop-types'

export default function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
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
}