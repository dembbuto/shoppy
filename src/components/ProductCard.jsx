import React from 'react'

export default function ProductCard({ 
  product: { id, image, title, price, category }
}) {
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg'>
        <h3 className='truncate'>{title}</h3>
      </div>
      <div className='mb-2 px-2 flex justify-between items-center'>
        <p className='text-gray-600'>{category}</p>
        <p>{`${price.toLocaleString()}원`}</p>
      </div>
    </li>
  )
}
