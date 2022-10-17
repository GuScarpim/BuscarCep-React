import React from 'react'
import './index.css'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { BrowserRouter } from 'react-router-dom'
import Nav from './template/Nav'
import Routes from './routes/routes'
import Footer from './template/Footer'
import Logo from './template/Logo'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
