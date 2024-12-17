import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-purple-700 text-white font-sans">
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
      <div className="bg-blue-500">
        <div className="container mx-auto flex justify-center py-2 px-4">
          <div className="flex space-x-6 text-white">
            <a href="#" className="hover:text-gray-200">HOME</a>
            <a href="#" className="hover:text-gray-200">CLUB</a>
            <a href="#" className="hover:text-gray-200">CSE DEPARTMENTS</a>
            <a href="#" className="hover:text-gray-200">About Us</a>
            <a href="#" className="hover:text-gray-200">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
