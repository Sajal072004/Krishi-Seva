import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import CardSection from './components/CardSection';

const arr = [
  { "category" : "Crops" },
  { "category": "Seeds" },
  { "category": "Pulses" },
  { "category": "Fruits" },
  { "category": "Vegetables" },
  { "category": "Fodder Crops" },
  { "category": "Dairy Products" },
  { "category": "Fertilizers" }
];

const Mandi = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        {/* Sidebar with fixed position */}
        <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
          <Sidebar />
        </div>

        {/* Main content area with left margin to avoid overlap with the sidebar */}
        <div className='ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>
          <Navbar />

          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-row w-full z-0 mt-8 justify-between mr-12 ml-8 gap-6'
              >
                <CardSection title={item.category} />
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default Mandi;
