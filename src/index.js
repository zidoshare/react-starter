import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

const Root = document.getElementById( 'root' )

const isDev = !(process.env.NODE_ENV === 'development')

let render = () => {
  const Routes = require( './routes/index' ).default
  ReactDOM.render( <AppContainer><Routes/></AppContainer>, Root )
}

if ( isDev ) {
  if ( window.devToolsExtension ) {
    window.devToolsExtension.open()
  }
}

if ( isDev ) {
  if ( module.hot ) {
    // Development render functions
    const renderApp = render
    const renderError = ( error ) => {
      const RedBox = require( 'redbox-react' ).default

      ReactDOM.render( <RedBox error={error}/>, Root )
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error( error )
        renderError( error )
      }
    }

    // Setup hot module replacement
    module.hot.accept( './routes/index', () => setImmediate( () => {
      ReactDOM.unmountComponentAtNode( Root )
      render()
    } )
    )
  }
}

// Hot Module Replacement API
// if (module.hot) {
//   module
//     .hot
//     .accept('./', () => {
//       render(Routers)
//     })
// }

render()
