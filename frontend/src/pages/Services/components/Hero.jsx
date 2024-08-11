import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-[59vh]'>
      <img src="/home_banner_bg.png" alt="" className='h-[100%] w-[100%] object-cover' />
      <div
        className='absolute inset-0 bg-[#1b7a43]'
        style={{ opacity: 0.89 }}
      />
    </div>
  )
}

export default Hero
