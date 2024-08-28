import React from 'react';
import Card from './Card';
import productsData from './productData.json';

const CardSection = ({ title }) => {
  const data = productsData[title] || [];

  return (
    <div className='flex-row'>
      <div className='text-2xl my-4 text-gray-500'>
        <h1>{title}</h1>
      </div>
      <div className='flex justify-between'>
        {data.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
