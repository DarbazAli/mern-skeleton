import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/Home.js'
import Users from './screens/Users.js'
import Signup from './screens/Signup.js'
import Signin from './screens/Signin.js'

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
    </Switch>
  )
}

export default MainRouter
