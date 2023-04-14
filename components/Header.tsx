'use client';
import React from 'react'
import User from './User'
import Image from 'next/image'

import Logo from '../assets/images/logo.png'
import "@arco-design/web-react/dist/css/arco.css"


export default function Header() {
  
  return (
    <header className='flex justify-between p-5 text-gray-700'>
      <div className="flex space-x-5 items-center">
        <Image src={Logo} alt="logo" width={86} height={61} priority />
        <p className='text-4xl'><span className='text-pink-400'>Meow</span>Code</p>
        
      </div>
      <div className="flex space-x-5 items-center">
        <p className='link'>登录</p>
        <p className='link'>注册</p>
        
      </div>
    </header>
  )
}

