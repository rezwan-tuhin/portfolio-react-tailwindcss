import React from 'react'

function About() {
  return (
    <div id='about' className='bg-gray-100'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 flex space-x-15 py-24'>
        <div className='py-4 self-center'>
          <h1 className='text-5xl font-semibold text-gray-800 py-4'>What I do?</h1>
          <p className='text-md text-gray-500 pr-8 py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, corporis a? Quis, accusantium eos temporibus a blanditiis sint laborum dolore cum dolor officiis non adipisci totam dolores vel amet nam.</p>
          <p className='text-md text-gray-500 pr-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo cum illum beatae dolorem deleniti harum enim vitae, exercitationem odit impedit facilis expedita nisi. Quisquam quis assumenda reprehenderit similique cum!</p>
          <button className='px-6 py-2.5 mt-12 bg-purple-500 text-white rounded-sm font-semibold cursor-pointer hover:bg-purple-600 transition-hover duration-300'>Say Hello!</button>
        </div>
        <div>
          <div className='bg-white p-8 rounded-md mb-6 border-l-5 border-white hover:border-purple-500 hover:shadow-lg cursor-pointer transition-hover duration-300'>
            <h1 className='text-3xl font-bold text-gray-800 pb-2'>User Experience (UX)</h1>
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis accusamus quidem tempore cum aspernatur nihil ut, totam commodi exercitationem aperiam minus ipsum, placeat odio alias quia provident, dolor ea.</p>
          </div>
          <div className='bg-white p-8 rounded-md mb-6 border-l-5 border-white hover:border-purple-500 hover:shadow-lg cursor-pointer transition-hover duration-300'>
            <h1 className='text-3xl font-bold text-gray-800 pb-2'>User Interface (UI)</h1>
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis accusamus quidem tempore cum aspernatur nihil ut, totam commodi exercitationem aperiam minus ipsum, placeat odio alias quia provident, dolor ea.</p>
          </div>
          <div className='bg-white p-8 rounded-md mb-6 border-l-5 border-white hover:border-purple-500 hover:shadow-lg cursor-pointer transition-hover duration-300'>
            <h1 className='text-3xl font-bold text-gray-800 pb-2'>Web Development</h1>
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis accusamus quidem tempore cum aspernatur nihil ut, totam commodi exercitationem aperiam minus ipsum, placeat odio alias quia provident, dolor ea.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About