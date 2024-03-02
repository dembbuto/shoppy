import React from 'react'

export default function User({ user: { displayName, photoURL }}) {
  return (
    <div className='flex items-center shrink-0'>
      <img
        src={photoURL}
        alt={displayName}
        className='w-10 h-10 rounded-full mr-2'
      />
      <span className='hidden md:block text-brand/75'>{displayName}</span>
    </div>
  )
}
