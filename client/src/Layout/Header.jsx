import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/GlobalContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import axiosInstance from '../Context/baseUrl';


const Navbar = () => {
  const {dispatch} = useGlobalContext()
  const navigate = useNavigate()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const {state} = useGlobalContext();

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

  const handleLogOut = async(e)=>{
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data } = await axiosInstance.get("/user/logout")
      dispatch({ type: "LOGOUT", payload: false});
      localStorage.removeItem("auth", JSON.stringify({ user: "", token: ""}))
      toast.success("User logout successfully...")
      navigate("/")
    } catch (error) {
      toast.error("Failed to logout..");
    }
  }


  return (
    <div className="bg-purple-700 justify-around text-white font-sans">
      {/* Bottom Section with Logo and Title */}
      <div className="bg-indigo-300 shadow-sm ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-start md:justify-between px-4 py-6 space-y-4 md:space-y-0">
          <div className="flex items-center gap-1">
            {/* Logo */}
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_2048/https://dbrau.ac.in/wp-content/uploads/2022/02/Final-Logo-2048x2048.webp"
              alt="University Logo"
              className="w-24 h-24 object-cover rounded-full border-2 border-blue-500 shadow-sm"
            />

            {/* Text Info */}
            <div className='ml-2'>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 leading-tight">
                Institute of Engineering & Technology, Khandari, Agra
              </h1>
              <p className="text-gray-600 font-semibold text-sm mt-1 max-w-3xl">
                An Institution with 90+ Years of Glorious History & Contributions in Teaching and Research
              </p>
              <p className="text-red-600 text-sm font-semibold mt-1 tracking-wide">
                (Accredited Grade A+ by NAAC)
              </p>
            </div>
          </div>

          {/* Optional Right Side Buttons or Info */}
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="text-sm font-medium  text-gray-600">Affiliated to Dr. B. R. Ambedkar University</span>
            <span className="text-sm font-medium text-blue-800">Est. 1927</span>
          </div>
        </div>
      </div>
      {/* Navigation Links */}
      <div className="w-full bg-blue-900 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">

          {/* CENTER NAV LINKS */}
          <div className="flex space-x-8 text-white font-medium ">
            <Link to="/" className="hover:text-yellow-300 transition">HOME</Link>

            {/* Dropdown CLUB */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hover:text-yellow-300 cursor-pointer transition">
                CLUBS
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-44 text-sm z-20">
                  <Link
                    to="/club/coding"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    Coding Club
                  </Link>
                  <Link
                    to="/club/robotic"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    Robotic Club
                  </Link>
                  <Link
                    to="/club/gate"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    Gate Club
                  </Link>
                  <Link
                    to="/club/gaming"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    E-Gaming Club
                  </Link>
                  <Link
                    to="/club/autocad"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    AutoCAD Club
                  </Link>
                  <Link
                    to="/club/hackthon"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    Hackthon Club
                  </Link>
                  <Link
                    to="/club/automobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                     Automobile Club
                  </Link>
                  <Link
                    to="/club/maintenance"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                     Maintenance Club
                  </Link>
                  <Link
                    to="/club/sport"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    Sport Club
                  </Link>
                  <Link
                    to="/club/placement"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    Training & Placement Club
                  </Link>
                </div>
              )}
            </div>

            {/* <Link to="/cse-department" className="hover:text-yellow-300 transition">
              CSE DEPARTMENT
            </Link> */}
            <Link to="/about" className="hover:text-yellow-300 transition">ABOUT US</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">CONTACT</Link>
          </div>
            
          {state.user ? (
            <Dropdown
              overlay={
                <Menu>
                  {/* <Menu.Item key="1">
                    <Link 
                      className="block px-4 py-2 font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition" 
                      to="/profile"
                    > Profile
                    </Link>
                  </Menu.Item> */}
                  <Menu.Item key="1">
                    <Link 
                      className="block px-4 py-2 font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition" 
                      to="/notice"
                    >
                      Notices
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link 
                      className="block px-4 py-2 font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition" 
                      to="/upcoming-event"
                    > Upcoming Event
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link 
                      className="block px-4 py-2 font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition" 
                      to="/event"
                    > Event Data
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link  onClick={handleLogOut}
                      className="block px-4 py-2 font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition" 
                    >Logout
                    </Link>
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
              arrow
            >
              <Button className=" font-semibold text-blue-900 ">
                {"Dashboard"} <DownOutlined />
              </Button>
            </Dropdown>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-400 cursor-pointer text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-300 font-semibold transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

<GiHamburgerMenu className='text-2xl hover:text-yellow-300 cursor-pointer'/>