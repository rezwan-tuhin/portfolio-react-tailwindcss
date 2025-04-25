import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-32 pb-8">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center">
        <a href='#'>
        <div className="flex items-center gap-3 mb-4 md:mb-0 cursor-pointer">
          <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center font-bold">R</div>
          <span className="text-2xl font-semibold">Rezwan</span>
        </div>
        </a>
        <nav className="flex flex-wrap gap-4 text-sm text-gray-300">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#">Services</a>
          <a href="#process">Process</a>
          <a href="#projects">Projects</a>
          <a href="#">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="text-sm text-white mt-4 md:mt-0">Copyright &copy; 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer