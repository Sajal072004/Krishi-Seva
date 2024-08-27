import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";

const SectionOne = () => {
  return (
    <div className='mt-10 w-[25vw] h-[280px] bg-[#C5F4C1] flex flex-col items-center rounded-lg'>
      <div className='flex items-center '>
       
        <TiWeatherPartlySunny className='w-[11vh] h-[11vh] mr-4' />
        
        {/* Container for temperature and labels */}
        <div className='flex flex-col'>
          <div className='flex mt-10 items-center mb-2'>
            <p className='text-4xl font-semibold mr-6'>25°C</p>
            <div className='flex flex-col text-left'>
              <p className='text-[15px] font-medium'>Precipitation: 61%</p>
              <p className='text-[15px] font-medium'>Humidity : 88%</p>
              <p className='text-[15px] font-medium'>Wind: 8km/h</p>
            </div>
          </div>
        </div>
      </div>

      <p className='ml-[-160px] text-2xl mt-1'>Mostly Sunny</p>

      

      <button className='bg-white mt-8 w-[200px] py-4 text-[#1b7a43] rounded-lg text-xl'>
        Know More
      </button>
    </div>
  );
};

export default SectionOne;
