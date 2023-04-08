import React from 'react'
import User from './User'
import Image from 'next/image'
import { Button } from "@arco-design/web-react";
import Logo from '../assets/images/logo.png'
import "@arco-design/web-react/dist/css/arco.css"

export default function Header() {
  return (
    <header className='flex justify-between'>
      <div className="">
        <Image src={Logo} alt="logo" width={86} height={61} priority />
        <p>MeowCode</p>
        <Button type="primary">Hello Arco</Button>
      </div>
      <div className="">
        <p>登录</p>
        <p>注册</p>
        <User></User>
      </div>
    </header>
  )
}
