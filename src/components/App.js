import React from 'react'
import styles from './App.css'
import {Link} from 'react-router'
const App = () => (
  <div className={ styles.app }>
    <span>Hello, world!!!</span>
    <Link to="/app">另一个页面</Link>
  </div>
)

export default App