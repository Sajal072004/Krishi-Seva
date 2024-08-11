import React from 'react'
import Home from './pages/Home/Home'
import {Routes , Route} from 'react-router-dom'
import Services from './pages/Services/Services'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      
    </Routes>
   
  )
}

export default App