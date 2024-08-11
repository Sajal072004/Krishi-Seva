import React from 'react'
import { useState, useEffect } from 'react';

const Header = () => {

 

  return (
    <>
      <div className='fixed top-0 left-0 w-full bg-white z-20 flex items-center h-20 px-4 '>
        <img src="/logo.png" alt="" width={56} className='mx-4' />
        <div className='flex-grow flex justify-center'>
          <ul className='flex gap-x-6 lg:gap-x-12  list-none p-0 text-gray-500 text-lg cursor-pointer'>
            <li>Home</li>
            <li>Product</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
          <img src="profile_icon.png" alt="" className='mr-6'/>
          <img src="Notification.png" alt="" className='mr-12' />
      </div>
    </>

  )
}

export default Header
