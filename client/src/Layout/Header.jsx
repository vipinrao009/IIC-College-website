import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout); // Prevent dropdown from hiding too quickly
    }
    setIsDropdownOpen(true); // Show dropdown immediately
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false); // Add delay before hiding dropdown
    }, 300); // Delay in milliseconds
    setDropdownTimeout(timeout);
  };

  return (
    
    <div className="bg-purple-700 justify-around text-white font-sans">
      {/* Top Navbar */}
      {/* <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Alumni</a>
          <a href="#" className="hover:text-gray-300">GPS Photos</a>
          <a href="#" className="hover:text-gray-300">University Publications</a>
          <a href="#" className="hover:text-gray-300">Kulgeet</a>
          <a href="#" className="hover:text-gray-300">Anti-Ragging</a>
          <a href="#" className="hover:text-gray-300">Geotag</a>
          <a href="#" className="hover:text-gray-300">2024 Holidays List</a>
          <a href="#" className="hover:text-gray-300">Tenders</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
          <a href="#" className="hover:text-gray-300">Email</a>
        </div>
      </div> */}

      {/* Bottom Section with Logo and Title */}
      <div className=" bg-blue-300 text-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-12">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_2048/https://dbrau.ac.in/wp-content/uploads/2022/02/Final-Logo-2048x2048.webp" // Replace with actual logo URL
              alt="University Logo"
              className="w-20 h-20"
            />
            <div>
              <h1 className="text-3xl font-bold text-purple-800">Institute Of Engineering & Technology Khandari, Agra</h1>
              <p className="text-gray-600 text-sm mt-1">
                An Institution Of 90 Years of Glorious History & Contributions In Teaching And Research
              </p>
              <p className="text-red-500 text-sm font-semibold">(Accredited Grade A+ by NAAC)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto flex justify-center py-2 px-4">
        <div className="flex space-x-6 text-white">
          <Link to={'/'} className="hover:text-gray-200">HOME</Link>
          {/* Dropdown for CLUB */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div className="hover:text-gray-200 cursor-pointer">CLUB</div>
            {isDropdownOpen && (
              <div className="absolute top-full -left-5 mt-2 bg-white text-blue-500 shadow-md  rounded-t-none rounded-md z-10">
                <Link
                  to={'/club/coding'}
                  className="block px-4 py-2 border hover:bg-blue-500 hover:text-white"
                >
                  Coding Club
                </Link>
                <Link
                  to={'/club/robotic'}
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Robotic Club
                </Link>
              </div>
            )}
          </div>
          <Link to={'/cse-department'} className="hover:text-gray-200">
            CSE DEPARTMENTS
          </Link>
          <Link to={'/about'} className="hover:text-gray-200">About Us</Link>
          <Link to={'/contact'} className="hover:text-gray-200">Contact Us</Link>
        </div>

        <Link to={'/login'} className="ml-3 hover:text-gray-200">
            Login/Register
        </Link>
      </div>


    </div>
  );
};

export default Navbar;
