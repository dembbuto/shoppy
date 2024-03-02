import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import { BsFillPencilFill } from 'react-icons/bs'
import { useAuthContext } from './context/AuthContext'

import User from './User'
import Button from './ui/Button'

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to="/" className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to="/products">상품</Link>
        {user && <Link to="/cart">장바구니</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className='text-2xl'>
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text='로그인' onClick={login} />}
        {user && <Button text='로그아웃' onClick={logout} />}
      </nav>
    </header>
  )
}
