import React from 'react'

function Navbar() {
  return (
   <div className='bg-white'>
     <div className='container mx-auto px-4 md:px-16 lg:px-24 h-[70px] py-2 flex justify-between items-center'>
        <a href='#'>
        <div className='flex space-x-2 cursor-pointer'>
          <div className='w-12 h-12 rounded-full p-2 bg-purple-500 text-white flex justify-center items-center cursor-pointer hover:bg-purple-700 duration-300'><span className='text-white text-2xl'>R</span></div>
          <div className='flex justify-center items-center'><span className='font-bold text-2xl text-gray-700'>Rezwan</span></div>
        </div>
        </a>

      <div>
        <ul className='flex space-x-2'>
          <a href='#'><li className='px-6 py-2 hover:bg-purple-500 hover:text-white hover:rounded-xs transition-hover duration-300'>Home</li></a>
          <a href='#about'><li className='px-6 py-2 hover:bg-purple-500 hover:text-white hover:rounded-xs transition-hover duration-300'>About</li></a>
          <a href='#process'><li className='px-6 py-2 hover:bg-purple-500 hover:text-white hover:rounded-xs transition-hover duration-300'>Process</li></a>
          <a href='#projects'><li className='px-6 py-2 hover:bg-purple-500 hover:text-white hover:rounded-xs transition-hover duration-300'>Projects</li></a>
          <a href='#'><li className='px-6 py-2 hover:bg-purple-500 hover:text-white hover:rounded-xs transition-hover duration-300'>Services</li></a>
          <a href='#contact'><li className='px-6 py-2 hover:bg-purple-500 hover:text-white hover:rounded-xs transition-hover duration-300'>Contact</li></a>
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Navbar