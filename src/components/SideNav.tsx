import React from 'react'
import Link from 'next/link'

const SideNav = () => {
  return (
    <nav className='border md:w-64 md:h-screen hidden'>
        <Link href="/admin/dashboard">Dashboard</Link>
    </nav>
  )
}

export default SideNav;