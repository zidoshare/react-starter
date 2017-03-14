import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

import Routers from './routes'

const render = ( Component ) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>, document.getElementById( 'root' ) )
}
render( Routers )

// Hot Module Replacement API
// if (module.hot) {
//   module
//     .hot
//     .accept('./', () => {
//       render(Routers)
//     })
// }

if ( process.env.NODE_ENV === 'development' && module.hot ) {
  //开发环境下的热加载
  module
    .hot
    .accept( './routes/index', () => {
      render( Routers )
    } )
}
