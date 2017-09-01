import React from 'react'
import PropTypes from 'prop-types'

import './inFolder.less'
export default function InFolder(props){
  const {className,dataSource} = props
  if(props.type === 'scale')
    return (
      <div className="in-folder-list">
        {dataSource.map((obj,index) => (
          <figure className = {className} key={'in-folder-list'+index}>
            <img src={obj.img}/>
            <figcaption>
              <h2>{obj.title}</h2>       
              <div>{obj.msg}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    )
  else if(props.type === 'flip')
    return (
      <div className="in-folder-list-flip">
        {dataSource.map((obj,index) => (
          <div className="flip-container">
            <figure className = {className} key={'in-folder-list'+index}>
              <img src={obj.img}/>
              <figcaption>
                <h2>{obj.title}</h2>
                <div className="flip-back">{obj.msg}</div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    )
}
InFolder.defaultProps = {
  type:'scale',
}
InFolder.propTypes = {
  dataSource:PropTypes.arrayOf(PropTypes.shape({
    img:PropTypes.string,
    title:PropTypes.string,
    msg:PropTypes.oneOfType([PropTypes.string,PropTypes.element]),
  })),
  type:PropTypes.string,
  className:PropTypes.string,
}