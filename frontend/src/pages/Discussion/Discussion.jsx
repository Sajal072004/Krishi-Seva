import React from 'react'
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import Navbar from './components/Navbar';


const Discussion = () => {
  return (
    <div className="flex h-[100vh] bg-[#F9FAFC]">
      <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
        <Sidebar />
      </div>
      <div className='ml-[25vw] md:ml-[17vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>
        <Navbar />
      </div>
    </div>
  )
}

export default Discussion