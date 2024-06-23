import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to ='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className ='text-gray-500'>Vintage</span>
        <span className ='text-slate-700'>Estates</span>
      </h1>
        </Link>
      <form className='bg-slate-100 p-3 rounded-lg '>
        <input type='text' placeholder ="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
      </form>
    <ul className='flex gap-6'>
      <Link to="/Home">
      <li className='hidden sm:inline font-bold hover:underline text-slate-600 '>Home</li>
      </Link>
      <Link to="/About">
      <li className='hidden sm:inline font-bold hover:underline text-slate-600 '>About</li>
      </Link>
      <Link to='/Signin'>
      <li className='font-bold hover:underline text-slate-600 ' >Sign-In</li>
      </Link>
    </ul>
      </div>
      </header>
  )
}
