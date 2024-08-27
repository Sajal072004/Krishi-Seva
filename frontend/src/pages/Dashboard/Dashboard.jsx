import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        <Sidebar />
        <Navbar />
      </div>


    </>
  )
}

export default Dashboard