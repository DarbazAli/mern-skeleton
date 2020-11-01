import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home.js'
import Users from './screens/Users.js'
import Signup from './screens/Signup.js'

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/signup' component={Signup} />
    </Switch>
  )
}

export default MainRouter
