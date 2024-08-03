import React from 'react'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=' bg-slate-800 text-white'>
    <div className='flex justify-between items-center px-4 h-14'>
    <div className='logo font-bold text-white text-2xl'>
    <span className='text-orange-500'>&lt;Pass</span>
    word
    <span className='text-green-700'>OP/&gt;</span>
    </div>
      <ul>
        <li className='navPoint flex gap-4 hidden md:block'>
            <a className='hover:font-bold mr-4' href='/'>Home</a>
            <a className='hover:font-bold' href='/'>About</a>
            <a className='hover:font-bold ml-4' href='/'>Contact</a>
        </li>
      </ul>

      <button className=' ring-2 bg-green-600 rounded-md p-2 ring-white flex gap-3 items-center'>
      <FaGithub />
      <span>Github</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar;
