import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center items-center py-4">
      <div className='fixed top-5 flex flex-row justify-center items-center border border-gray-500 rounded-4xl bg-black/50 w-max z-50 md:left-[38vw]
      px-8 py-2 gap-8 md:text-xl text-lg  backdrop-blur-sm '>
        <Link href="/introduction#home" className="hover:cursor-pointer">
          <div>Home</div>
        </Link>
        <Link href="/introduction#project" className="hover:cursor-pointer">
          <div>Projects</div>
        </Link>
        <Link href="/introduction#about" className="hover:cursor-pointer">
          <div>About</div>
        </Link>

      </div>
    </div>
  )
}

export default Navbar
