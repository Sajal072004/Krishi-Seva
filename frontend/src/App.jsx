import React from 'react'
import Home from './pages/Home/Home'
import {Routes , Route} from 'react-router-dom'
import Services from './pages/Services/Services'
import Dashboard from './pages/Dashboard/Dashboard'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

      
    </Routes>
   
  )
}

export default App;