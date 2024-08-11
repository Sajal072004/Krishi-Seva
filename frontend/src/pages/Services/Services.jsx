import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Marketplace from './components/marketplace/Marketplace'

const Services = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className='mt-12'>
        <Marketplace />
      </div>

    </>
  )
}

export default Services