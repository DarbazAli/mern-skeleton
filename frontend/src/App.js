import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './MainRouter.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
const App = () => {
  return (
    <Router>
      <Header />
      <MainRouter />
      <Footer />
    </Router>
  )
}

export default App
