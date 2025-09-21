import React from 'react';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<div className='fixed top-0 left-0 w-full flex p-2 px-24 justify-between items-center text-black border border-gray-200 bg-white z-50'>
    <Link to='/'>
        <img src={logo} alt='khan' className='h-14 w-auto' />
    </Link>
    <div className='flex gap-6 font-sans font-medium text-lg'>
        <Link to='/' className='text-black hover:text-[#0BA6DF]'>Home</Link>
        <Link to='/project' className='text-black hover:text-[#0BA6DF]'>Project</Link>
        <Link to='/articles' className='text-black hover:text-[#0BA6DF]'>Articles</Link>
        <Link to='/course' className='text-black hover:text-[#0BA6DF]'>Course</Link>
        <Link to='/about' className='text-black hover:text-[#0BA6DF]'>About</Link>
    </div>
</div>



  )
}

export default Header;
