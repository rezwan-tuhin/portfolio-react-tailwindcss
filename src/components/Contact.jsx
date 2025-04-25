import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { GoPaperAirplane } from 'react-icons/go';

function Contact() {
  return (
 <div id='contact' className='bg-white container mx-auto px-4 md:px-16 lg:px-24'>
     <div className='bg-white relative z-20 -mb-8 p-16 shadow-2xl rounded-md flex flex-col md:flex-row space-x-6'>
      <div className='w-1/2'>
        <h2 className='text-3xl font-bold text-gray-700 pb-3'>Let's discuss your Project</h2>
        <p className='text-gray-400 text-md leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas fugit veniam nobis dolor ad dolorem doloribus enim.</p>
        <div className='w-2/3 flex space-x-2 p-6 hover:bg-white hover:shadow-2xl hover:rounded-lg mt-3 transition duration-300 group'>
          <div>
            <CiLocationOn className='w-12 h-12 bg-purple-100 p-3 rounded-md text-3xl font-extrabold text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition duration-300'/>
          </div>
          <div>
            <p className='text-gray-500'>Adress:</p>
            <p className='font-semibold'>Shahjahanpur, Dhaka-1217</p>
          </div>
        </div>
        <div className='w-2/3 flex space-x-2 p-6 hover:bg-white hover:shadow-2xl hover:rounded-lg mt-3 transition duration-300 group'>
          <div>
            <CiLocationOn className='w-12 h-12 bg-purple-100 p-3 rounded-md text-3xl font-extrabold text-purple-700 group-hover:bg-purple-700 group-hover:text-white cursor-pointer transition duration-300'/>
          </div>
          <div>
            <p className='text-gray-500'>My Email:</p>
            <p className='font-semibold'>rezwan.tuhin@gmail.com</p>
          </div>
        </div>
        <div className='w-2/3 flex space-x-2 p-6 hover:bg-white hover:shadow-2xl hover:rounded-lg mt-3 transition duration-300 group'>
          <div>
            <CiLocationOn className='w-12 h-12 bg-purple-100 p-3 rounded-md text-3xl font-extrabold text-purple-700 group-hover:bg-purple-700 group-hover:text-white cursor-pointer transition duration-300'/>
          </div>
          <div>
            <p className='text-gray-500'>Call Me Now:</p>
            <p className='font-semibold'>+88 01835501944</p>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quae minus at quam dignissimos eveniet quis praesentium sint,</p>
      <form className='mt-12'>
        <div className='relative w-full mt-2'>
        <input type='text' name='name' placeholder=' ' className='peer w-full border-0 border-b-2 border-gray-200 bg-transparent pl-16 pr-2 py-4 text-md text-gray-900 focus:border-purple-500 focus:outline-none'/>
          <label htmlFor='name' className='absolute left-0 top-4 text-md text-gray-500 font-semibold peer-focus:text-purple-500 transition-colors'>Name*</label>
        </div>
        <div className='relative w-full mt-2'>
        <input type='email' name='email' placeholder=' ' className='peer w-full border-0 border-b-2 border-gray-200 bg-transparent pl-16 pr-2 py-4 text-md text-gray-900 focus:border-purple-500 focus:outline-none'/>
          <label htmlFor='email' className='absolute left-0 top-4 text-md text-gray-500 font-semibold peer-focus:text-purple-500 transition-colors'>Email*</label>
        </div>
        <div className='relative w-full mt-2'>
        <input type='text' name='location' placeholder=' ' className='peer w-full border-0 border-b-2 border-gray-200 bg-transparent pl-20 pr-2 py-3 text-md text-gray-900 focus:border-purple-500 focus:outline-none'/>
          <label htmlFor='location' className='absolute left-0 top-3 text-md text-gray-500 font-semibold peer-focus:text-purple-500 transition-colors'>Location*</label>
        </div>
      <div className='flex space-x-5 mt-2'>
      <div className='relative w-full flex-1'>
        <input type='text' name='budget' placeholder=' ' className='peer w-full border-0 border-b-2 border-gray-200 bg-transparent pl-16 pr-2 py-3 text-md text-gray-900 focus:border-purple-500 focus:outline-none'/>
          <label htmlFor='budget' className='absolute left-0 top-3 text-md text-gray-500 font-semibold peer-focus:text-purple-500 transition-colors'>Budget*</label>
        </div>
        <div className='relative w-full flex-2'>
        <input type='text' name='subject' placeholder=' ' className='peer w-full border-0 border-b-2 border-gray-200 bg-transparent pl-16 pr-2 py-3 text-md text-gray-900 focus:border-purple-500 focus:outline-none'/>
          <label htmlFor='subject' className='absolute left-0 top-3 text-md text-gray-500 font-semibold peer-focus:text-purple-500 transition-colors'>Subject*</label>
        </div>
      </div>
        <div className='relative w-full mt-2'>
        <input type='text' name='message' placeholder=' ' className='peer w-full border-0 border-b-2 border-gray-200 bg-transparent pl-20 pr-2 py-3 text-md text-gray-900 focus:border-purple-500 focus:outline-none'/>
          <label htmlFor='message' className='absolute left-0 top-3 text-md text-gray-500 font-semibold peer-focus:text-purple-500 transition-colors'>Message*</label>
        </div>
        <button className='bg-purple-500 mt-14 px-6 py-2.5 text-white text-lg font-semibold rounded-md cursor-pointer hover:bg-purple-700 transition-color duration-300'>Submit <GoPaperAirplane className='inline-block text-white text-2xl ml-2 font-bold'/></button>
      </form>
      </div>

    </div>
 </div>
  );
}

export default Contact;
