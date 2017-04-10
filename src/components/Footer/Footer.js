import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

class Footer extends React.Component {
  render() {
    const props = { ...this.props }
    delete props.isMode
    return (<OverPack
      {...props}
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
          Copyright © 2017 <a href="http://www.zido.site">zido</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>)
  }
}

Footer.defaultProps = {
  className: 'footer0',
}

export default Footer
