import React from 'react'
import PropTypes from 'prop-types'
export default function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'green'}}
      onClick={onClick}
    ></div>
  )
}
SamplePrevArrow.defaultProps = {
  className:'',
  onClick:()=>{},
}

SamplePrevArrow.propTypes = {
  className:PropTypes.string,
  style:PropTypes.object,
  onClick:PropTypes.func,
}