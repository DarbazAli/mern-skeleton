import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home.js'

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default MainRouter
