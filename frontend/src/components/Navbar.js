import React from 'react';
import Modal from './Modal';
import { useState } from 'react';



const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navbarStyle = {
    backgroundColor: 'indigo',
    color: 'white',
    padding: '10px',
  };
  const handleSocialsClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <nav id="navbar" style={navbarStyle} className="flex justify-between px-20 py-10 items-center bg-white">
    <h1 className="text-xl text-white-800 font-bold">Project Management Tool</h1>
    <div className="flex items-center">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
      </div>
      <ul className="flex items-center space-x-6">
      
      <li>
  <button
    onClick={handleSocialsClick}
    className="font-semibold text-white-700 transition-colors duration-300 hover:text-indigo-200 focus:outline-none"
  >
    Socials
  </button>
</li>  
{isModalOpen && <Modal />}
        <li className="font-semibold text-white-700">Connect with members</li>
       
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </li>
       
      </ul>
    </div>
  </nav>
);
};

export default Navbar;




