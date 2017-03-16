import React from 'react'

import Content0 from './Content0'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Footer from './Footer'

import './less/antMotion_style.less'

export default class Home extends React.Component {
  componentDidMount() {}

  render() {
    const children = [
      <Content0 id="Content0" key="Content0"/>,
      <Content1 id="Content1" key="Content1"/>,
      <Content2 id="Content2" key="Content2"/>,
      <Content3 id="Content3" key="Content3"/>,
      <Footer id="Footer" key="Footer"/>,
    ]
    return (
    <div >
      {children}
    </div>
    )
  }
}
