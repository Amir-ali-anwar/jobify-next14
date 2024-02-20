import React from 'react'
import Image from 'next/image';
import Logo from '@/assets/logo.svg';

const Sidebar = () => {
  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Image src={Logo} alt='logo' className='mx-auto' priority />
      </aside>
  )
}

export default Sidebar
