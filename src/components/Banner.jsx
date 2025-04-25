import React from 'react'
import myPhoto from '../assets/images/tuhin.png';

function Banner() {
  return (
    <div className='bg-white'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-8 mt-28 flex space-x-20 h-auto'>
        <div className='w-6/12'>
          <h1 className='text-5xl font-bold text-gray-700'>Hello, I'm <br/> Rezwan Ahammed Tuhin</h1>
          <p className='py-4 text-sm'>
            I'm a Blockchain Developer based in Dhaka, Bangladesh, focused in building user-centric solutions
            using smart contracts, NFTs, and DeFi platforms. 
          </p>
          <button className="bg-purple-500 px-6 py-2 rounded-sm text-white cursor-pointer hover:bg-purple-700 transition-hover duration-300">Say Hello!</button>
          <div className='w-full pt-28 mb-10 flex space-x-1'>
            <div className='bg-purple-100 hover:bg-purple-200 w-1/3 p-4 rounded-sm'>
              <h2 className='text-xl font-bold text-gray-700 text-center'>1 Y.</h2>
              <p className='text-sm text-center text-gray-700 pt-4'>Experience</p>
            </div>
            <div className='bg-purple-100 hover:bg-purple-200 w-1/3 p-4 rounded-sm'>
              <h2 className='text-xl font-bold text-gray-700 text-center'>25+</h2>
              <p className='text-sm text-center text-gray-700 pt-4'>Projects Completed</p>
            </div>
            <div className='bg-purple-100 hover:bg-purple-200 w-1/3 p-4 rounded-sm'>
              <h2 className='text-xl font-bold text-gray-700 text-center'>19</h2>
              <p className='text-sm text-center text-gray-700 pt-4'>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className='w-5/12 h-full bg-white shadow-2xl/15 rounded-2xl mb-10 flex justify-center'>
          <img src={myPhoto} alt="Tuhin's Photo" width={312} className='' />
        </div>
      </div>
    </div>
  )
}

export default Banner