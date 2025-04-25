import React from 'react'

function WorkTogether() {
  return (
    <div className='bg-slate-800'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-24 flex justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className='w-full md:w-7/12 text-white text-5xl font-semibold text-center'>Do you have Project idea?</h1>
          <h1 className='w-full md:w-7/12 text-white text-5xl font-semibold text-center leading-15'>Let's discuss your project!</h1>

          <p className='text-gray-400 py-6 text-md text-center w-full md:w-7/12 leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorem ipsa minus rem natus voluptas odio atque, voluptatum reiciendis dolores earum sint distinctio, vel tenetur ut facere asperiores hic mollitia.</p>
          <button className='px-6 py-2.5 bg-purple-500 text-white rounded-sm font-semibold hover:bg-purple-600 cursor-pointer transition-hover duration-300'>Let's Work Together &rarr;</button>
        </div>
      </div>
    </div>
  )
}

export default WorkTogether