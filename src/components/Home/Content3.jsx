import React from 'react'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  getDelay(e){
    return e.index % 3 * 100 + Math.floor(e.index / 3) * 100 + 200
  }
  render() {
    const blockArray = [
      {
        children: {
          icon: {
            children: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png'
          },
          title: {
            children: '企业资源管理'
          },
          content: {
            children: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。'
          }
        }
      }, {
        children: {
          icon: {
            children: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png'
          },
          title: {
            children: '云安全'
          },
          content: {
            children: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。'
          }
        }
      }, {
        children: {
          icon: {
            children: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png'
          },
          title: {
            children: '云监控'
          },
          content: {
            children: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。'
          }
        }
      }, {
        children: {
          icon: {
            children: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png'
          },
          title: {
            children: '移动'
          },
          content: {
            children: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。'
          }
        }
      }, {
        children: {
          icon: {
            children: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png'
          },
          title: {
            children: '分布式中间件'
          },
          content: {
            children: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。'
          }
        }
      }, {
        children: {
          icon: {
            children: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png'
          },
          title: {
            children: '大数据'
          },
          content: {
            children: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。'
          }
        }
      }
    ]
    const children = blockArray.map((item, i) => {
      const children = item.children
      const styleObj = item.style || {}
      return (
        <li
          key={i}
          style={{
            left: `${i % 3 * 33.33}%`,
            top: `${Math.floor(i / 3) * 200}px`,
            ...styleObj
          }}>
          <TweenOne
            animation={{
              x: '-=10',
              opacity: 0,
              type: 'from'
            }}
            className="img"
            key="img"
            style={children.icon.style}>
            <img src={children.icon.children} width="100%"/>
          </TweenOne>
          <QueueAnim delay={100} leaveReverse key="text" className="text">
            <h1 key="h1" style={children.title.style}>{children.title.children}</h1>
            <p key="p" style={children.content.style}>{children.content.children}</p>
          </QueueAnim>
        </li>
      )
    })
    const titleAnim = {
      y: '+=30',
      opacity: 0,
      type: 'from'
    }
    return (
      <div {...this.props} className="content-template-wrapper">
        <OverPack
          className={`content-template ${this.props.className}`}
          location={this.props.id}>
          <TweenOne key="h1" animation={titleAnim} component="h1">
            蚂蚁金融云提供专业的服务
          </TweenOne>
          <TweenOne key="p" animation={titleAnim} component="p">
            基于阿里云强大的基础资源
          </TweenOne>
          <QueueAnim
            key="ul"
            component="ul"
            leaveReverse
            type="bottom"
            interval={0}
            delay={this.getDelay}>
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    )
  }
}

Content.propTypes = {
  id: React.PropTypes.string,
  className:React.PropTypes.string
}

Content.defaultProps = {
  className: 'content2'
}

export default Content
