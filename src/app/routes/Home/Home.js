import React from 'react'
import PropTypes from 'prop-types'

import {Carousel} from 'antd'

import InFolder from '../../components/InFolder'
import SampleArrow from '../../components/SampleArrow'
const pic1 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic1.jpg'
const pic2 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic3.jpg'
const pic3 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic4.jpg'
const pic10 = 'http://odp22tnw6.bkt.clouddn.com/v1/pic10.jpg'
const humPic = 'http://odp22tnw6.bkt.clouddn.com/v1/humanities.png'
const serverPic = 'http://odp22tnw6.bkt.clouddn.com/v1/pic4.png'
const mindPic = 'http://odp22tnw6.bkt.clouddn.com/v1/mind.png'
const folder2bg = 'http://odp22tnw6.bkt.clouddn.com/v1/folder-2-bg.jpg'
const culturePic = 'http://odp22tnw6.bkt.clouddn.com/v1/culture.png'


const p2 = 'http://odp22tnw6.bkt.clouddn.com/v1/gsbank.jpg'
const p3 = 'http://odp22tnw6.bkt.clouddn.com/v1/jsbank.jpg'
const p4 = 'http://odp22tnw6.bkt.clouddn.com/v1/jtbank.jpg'
const p5 = 'http://odp22tnw6.bkt.clouddn.com/v1/msbank.jpg'
const p7 = 'http://odp22tnw6.bkt.clouddn.com/v1/nybank.jpg'
const p8 = 'http://odp22tnw6.bkt.clouddn.com/v1/pabank.jpg'
import './Home.less'



export default class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {isMode} = this.props
    return (
      <div>
        <Carousel 
          className="banner-item" 
          draggable 
          pauseOnHover
          arrows = {!isMode}
          prevArrow={<SampleArrow type="left"/>} 
          nextArrow={<SampleArrow type="right"/>}
        >
          <div style={{backgroundImage:'url("http://odp22tnw6.bkt.clouddn.com/banner1.jpg")'}}></div>
          <div  style={{backgroundImage:'url("http://odp22tnw6.bkt.clouddn.com/banner2.jpg")'}}></div>
        </Carousel>
        <div className="folder">
          <h1 className="text-center folder-title">
            悬浮特效
            <img className="bottom-align" src={pic10}/>
          </h1>
          <InFolder className="pic-item" dataSource={[{
            img:pic1,
            title:'行业优势',
            msg:'  让我略一个'
          },{
            img:pic2,
            title:'资源优势',
            msg:'  再让我略一个'
          },{
            img:pic3,
            title:'运营优势',
            msg:'  继续让我略一个'
          }]}/>
        </div>
        <div className="bg-center folder" style={!isMode?{backgroundImage:`url(${folder2bg})`}:{}}>
          <h1 className="bg-center text-center folder-title" style={{color:'white',...isMode?{backgroundImage:`url(${folder2bg})`}:{}}} >
            翻转特效
            <img className="bottom-align" src={pic10}/>
          </h1>
          <InFolder type="flip" dataSource = {[{
            img:humPic,
            title:'示例',
            msg:<div>
                <p>示例==========</p>
                <p>示例</p>
              </div>
          },{
            img:culturePic,
            title:'示例',
            msg:<div>
                <p>示例</p>
                <p>示例==========</p>
              </div>,
          },{
            img:serverPic,
            title:'示例',
            msg:<div>
                <p>示例==========</p>
              </div>,
          },{
            img:mindPic,
            title:'示例',
            msg:'示例=========='
          }]}/>
        </div>
        <div className="folder" style={{height:'auto'}}>
          <h1 className="text-center folder-title">
            滚动栏(开元项目，以下图片借用，=。=)
            <img className="bottom-align" src={pic10}/>
          </h1>
          <div>
            <Carousel 
              slidesToShow={5} 
              autoplay 
              swipeToSlide 
              arrows={!isMode} 
              style={{height:120}}
              prevArrow={<SampleArrow type="left"/>} 
              nextArrow={<SampleArrow type="right"/>} 
              vertical={isMode} 
              draggable={!isMode} 
              dots={false}>
              <div className="bg-center" style={{backgroundImage:`url(${p2})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p3})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p4})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p5})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p7})`,height:80}}/>
              <div className="bg-center" style={{backgroundImage:`url(${p8})`,height:80}}/>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  isMode:PropTypes.bool.isRequired,
}