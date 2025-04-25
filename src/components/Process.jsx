import React from 'react'
import { PiNotepadBold } from 'react-icons/pi'
import { GoGraph, GoPencil } from 'react-icons/go'
import { CiLaptop } from 'react-icons/ci'

function Process() {

  const data = [
    [{
      id:1,
      icon: <PiNotepadBold className='w-12 h-12 p-3 text-3xl rounded-md bg-gray-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-color duration-300'/>,
      title: 'Research',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus, aut illum neque consectetur quia quae voluptas esse' 
    },
    
    {
      id:3,
      icon: <GoPencil className='w-12 h-12 p-3 text-3xl rounded-md bg-gray-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-color duration-300'/>,
      title: 'Design',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus, aut illum neque consectetur quia quae voluptas esse' 
    }],
    [{
      id:2,
      icon: <GoGraph className='w-12 h-12 p-3 text-3xl rounded-md bg-gray-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-color duration-300'/>,
      title: 'Analyze',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus, aut illum neque consectetur quia quae voluptas esse' 
    },
    {
      id:4,
      icon: <CiLaptop className='w-12 h-12 p-3 text-3xl rounded-md bg-gray-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-color duration-300'/>,
      title: 'Launch',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus, aut illum neque consectetur quia quae voluptas esse' 
    },]
  ]
  return (
    <div id='process' className='bg-gray-100'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 flex space-x-18'>
        <div className='w-5/12 py-20 flex justify-center items-center'>
          <div>
          <h2 className='text-2xl text-gray-700 font-bold py-4'>Work Process</h2>
          <p className='text-md text-gray-700 text-justify pb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ducimus, aut illum neque consectetur quia quae voluptas esse aspernatur nisi laudantium. Perferendis consequuntur blanditiis dolores unde quaerat est quis? Ducimus!</p>
          <p className='text-md text-gray-700 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa laborum molestias, numquam doloribus reprehenderit eum officia eos quae, maiores, modi expedita ipsum recusandae porro blanditiis eligendi commodi culpa iste beatae.
          </p>
          </div>
        </div>
        <div className='w-6/12 grid grid-cols-2 gap-6 pt-48 pb-30'>
         {
          data.map((columnData, index) => (
            <div key={index} className='group/col space-y-6'>
               {
            columnData.map((item, index) => (
              <div key={item.id} className='bg-white p-6 rounded-lg group group-hover/col:shadow-md group-hover/col:-translate-y-4 transition-translate duration-300'>
                {item.icon}
                <h2 className='py-6 text-lg font-bold text-gray-800'><span>{item.id}. </span><span>{item.title}</span></h2>
                <p className='text-gray-500'>{item.description}</p>
              </div>
            ))
          }
            </div>
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Process