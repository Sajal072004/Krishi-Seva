import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaTruck } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImAddressBook } from "react-icons/im";
import { RiMegaphoneFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const arr = [
  {
    "id": 1,
    "title": "Dashboard",
    "icon": <RxDashboard />
  },
  {
    "id": 2,
    "title": "Mandi",
    "icon": <FaTruck />
  },
  {
    "id": 3,
    "title": "Explore",
    "icon": <FaMagnifyingGlass />
  },
  {
    "id": 4,
    "title": "Latest News",
    "icon": <RiMegaphoneFill />
  },
  {
    "id": 5,
    "title": "Contact Us",
    "icon": <ImAddressBook />
  },
  {
    "id": 6,
    "title": "About Us",
    "icon": <MdContacts />
  }
];

const Sidebar = () => {
  const [selected, setSelected] = useState('Dashboard');

  return (
    <div className='w-[25vw] md:w-[20vw] h-[120vh] bg-white'>
      <div className='flex h-[17vh] items-center gap-3 justify-left'>
        <img src="logo.png" alt="Logo" className='w-[70px] h-[70px] ml-3' />
        <h1 className='text-2xl text-gray-700 font-semibold'>Krishi Seva</h1>
      </div>

      <div className='mt-8'>
        {arr.map((item, index) => {
          return (
            <div 
              key={index} 
              onClick={() => setSelected(item.title)} 
              className={`mt-2 flex items-center py-[4px] justify-left text-xl cursor-pointer ${selected === item.title ? 'bg-[#1b7a43]' : ''}`}
            >
              <div className={`p-3 ${selected === item.title ? 'text-white' : 'text-gray-500'}`}>
                {item.icon}
              </div>

              <div className={`p-3 pl-2 w-full ${selected === item.title ? 'text-white' : 'text-gray-500'}`}>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      
      <div className='mt-16 flex flex-col items-center relative'>
        <img src="help_center.png" alt="Help Center" className='w-[90%] absolute z-0' />
        <p className='text-gray-700 z-20 mt-10 font-semibold'>Help Center</p>
        <p className='w-[80%] text-gray-700 z-20 mt-10 font-semibold'>Having trouble? Contact us for more questions.</p>
        <button className='z-20 mt-8 px-4 py-2 bg-[#1b7a43] text-white rounded-lg '>
          Go to Help Center
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
