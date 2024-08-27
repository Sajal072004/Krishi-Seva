import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import SectionOne from './components/SectionOne/SectionOne'

const Dashboard = () => {
  return (
    <>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        <Sidebar />

        <div className='w-full'>
          <Navbar />

          <div className='flex w-full'>

            <div className='flex flex-row w-[55vw] z-0 h-[42vh]'>

                <div>
                    <SectionOne/>
                </div>

                <div>

                </div>

                <div>

                </div>



            </div>

            <div className='flex flex-row w-[25vw]'>


            </div>




          </div>

        </div>



      </div>



    </>
  )
}

export default Dashboard