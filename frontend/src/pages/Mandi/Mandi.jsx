import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import CardSection from './components/CardSection';

const arr = [ {
  "category" : "Crops",
},
{
  "category": "Seeds"
},
{
  "category": "Pulses",
},
{
  "category": "Fruits",
},
{
  "category": "Vegetables",
},
{
  "category": "Fodder Crops",
},
{
  "category": "Dairy Products",
},
{
  "category": "Fertilizers",
}
]

const Mandi = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        <Sidebar />

        <div className='w-full'>
          <Navbar />

          { arr.map((item, index) => {
            return (
              <div key={index} className='flex-row w-[80vw] z-0 mt-8 justify-between mr-12 ml-8'>
            <CardSection title={item.category} />
            <div className='h-3vh text-transparent'>hello</div>
          </div>
            )
          })}

          



        </div>
      </div>


    </div>
  )
}

export default Mandi;
