import React from 'react'
import image1 from '../assets/images/project1.png';
import metaLeaseImg from '../assets/images/metalease.png';
import blockCertsImg from '../assets/images/blockcerts.png';
import detrustImg from '../assets/images/detrust.png';
import ticketsImg from '../assets/images/tickets.png';
import daogendaImg from '../assets/images/daogenda.png';

function Projects() {
  const projects = [
    {
      id:1,
      image: image1,
      category: 'BLOCKCHAIN PROJECT',
      title: 'ChainFund',
      description: 'A decentralized crowdfunding platform powered by smart contract'
    },
    {
      id:2,
      image: metaLeaseImg,
      category: 'BLOCKCHAIN PROJECT',
      title: 'MetaLease',
      description: 'Blockchain-based solution for secure deigital leasing and asset rentals.'
    },
    {
      id:3,
      image: blockCertsImg,
      category: 'BLOCKCHAIN PROJECT',
      title: 'BlockCerts',
      description: 'Tamper-proof certificate issuance and verification on the blockchain.'
    },
    {
      id:4,
      image: detrustImg,
      category: 'BLOCKCHAIN PROJECT',
      title: 'DeTrust Vault',
      description: 'A non-custodial DeFi wallet with built-in trustless escrow services.'
    },
    {
      id:5,
      image: ticketsImg,
      category: 'BLOCKCHAIN PROJECT',
      title: 'NFTicket',
      description: 'NFT-powered event ticketing system to prevent fraud and scalping.'
    },
    {
      id:6,
      image: daogendaImg,
      category: 'BLOCKCHAIN PROJECT',
      title: 'DAOgenda',
      description: 'A governance platform enabling transparent DAO decision-making and voting.'
    }
  ];
  return (
    <div id='projects' className='bg-white'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-8'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-5xl font-bold text-gray-800 py-4'>Projects</h2>
          <p className='w-full md:w-1/2 lg:w-5/12 text-center py-2 text-gray-500 text-md mb-20'>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration.</p>
        </div>
        <div className='grid grild-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            projects.map((project) => (
              <div key={project.id} className='bg-white rounded-lg border border-gray-200 transition-transform hover:scale-105 duration-300 cursor-pointer'>
                <img src={project.image} alt='' className='rounded-t-lg'/>
                <div className='p-6'>
                  <h4 className='text-xs text-gray-500 py-2 font-semibold'>{project.category}</h4>
                  <h2 className='text-xl text-gray-800 pb-2 font-bold'>{project.title}</h2>
                  <p className='text-sm text-gray-500 pb-2'>{project.description}</p>
                  <button className='px-6 py-2 border border-purple-500 rounded-sm text-purple-500 font-bold cursor-pointer hover:bg-purple-500 hover:text-white transition-hover duration-300'>Case Study &rarr;</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex justify-center items-center py-12'>
         <button className='px-6 py-2.5 bg-purple-500 text-white font-semibold rounded-md cursor-pointer hover:bg-purple-600 transition-hover duration-300'>More Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Projects