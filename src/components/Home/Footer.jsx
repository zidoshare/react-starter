import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'


class Footer extends React.Component {
  render() {
    return (<OverPack
      {...this.props}
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span
        >
          Copyright © 2016 The Project by <a href="#">Ant Motion</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>)
  }
}


Footer.propTypes = {
  dataSource:React.PropTypes.object
}

Footer.defaultProps = {
  className:'footer0',
}

export default Footer
