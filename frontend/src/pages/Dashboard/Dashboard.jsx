import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import SectionOne from './components/SectionOne/SectionOne'
import Weather from './components/Weather/Weather'
import RecentActivity from './components/RecentActivity/RecentActivity'

const Dashboard = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        <Sidebar />

        <div className='w-full'>
          <Navbar />

          <div className='flex w-full'>

            <div className='flex flex-row w-[55vw] z-0'>
              <SectionOne/>
              <div>
                {/* Placeholder or other content */}
              </div>
              <div>
                {/* Placeholder or other content */}
              </div>
            </div>

            <div className='flex flex-col w-[25vw] z-0'>
              <Weather />
              <RecentActivity />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard;
