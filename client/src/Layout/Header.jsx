import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/GlobalContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import axiosInstance from '../Context/baseUrl';
import ServerWakeMessage from '../pages/ServerWakeMessage';

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClubOpenMobile, setIsClubOpenMobile] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      await axiosInstance.get("/user/logout");
      dispatch({ type: "LOGOUT", payload: false });
      localStorage.removeItem("auth");
      toast.success("User logout successfully...");
      navigate("/");
    } catch (error) {
      toast.error("Failed to logout..");
    }
  };

  const clubLinks = [
    { name: "Coding Club", to: "/club/coding" },
    { name: "Training & Placement Club", to: "/club/placement" },
    { name: "Hackthon Club", to: "/club/hackthon" },
    { name: "Digital Media Club", to: "/club/poster" },
    { name: "Robotic Club", to: "/club/robotic" },
    { name: "Gate Club", to: "/club/gate" },
    { name: "E-Gaming Club", to: "/club/gaming" },
    // { name: "AutoCAD Club", to: "/club/autocad" },
    { name: "AI & IOT Club", to: "/club/iot" },
    // { name: "Automobile Club", to: "/club/automobile" },
    // { name: "Maintenance Club", to: "/club/maintenance" },
    { name: "Sport Club", to: "/club/sport" },
    { name: "Cultural Club", to: "/club/cultural" },
  ];

  const dashboardMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/notice">Notices</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/upcoming-event">Upcoming Event</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/event">Event Data</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/join">Club Students</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <span onClick={handleLogOut} className="cursor-pointer">
          Logout
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-purple-700 text-white font-sans">
      {/* Header Section */}
      <div className="bg-indigo-300 shadow-sm">
        <div className="container  mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6">
          <div className="flex items-center gap-2">
            <img
              src="https://dbrau.ac.in/wp-content/uploads/2022/02/Final-Logo-2048x2048.webp"
              alt="University Logo"
              className="w-20 h-20 hidden md:block rounded-full border-2 border-blue-500 shadow-sm"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-blue-900">
                Institute of Engineering & Technology Swami Vivekanand Campus, Agra
              </h1>
              <p className="text-gray-600 text-sm font-semibold">
                An Institution with 90+ Years of Glorious History & Contributions in Teaching and Research
              </p>
              <p className="text-red-600 text-sm font-semibold">
                (Accredited Grade A+ by NAAC)
              </p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm text-gray-600 font-medium">Dr. B. R. Ambedkar University</p>
            <p className="text-sm text-blue-800 font-medium">Est. 1927</p>
          </div>
        </div>
        <div>
          <ServerWakeMessage apiUrl={'https://ietclubnestbackend.onrender.com/api/v1/notice/fetch'}/>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-blue-900 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Hamburger icon */}
          <div className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>
          
          <h2 className='md:hidden font-medium'>IET CLUB NEST</h2>
          {/* Main Nav */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-yellow-300 md:font-semibold">HOME</Link>

            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
              <div className="hover:text-yellow-300 md:font-semibold cursor-pointer">CLUBS</div>
              {isDropdownOpen && (
                <div className="absolute bg-white text-gray-800 rounded-md shadow-lg top-full left-0 z-50 mt-2 w-44">
                  {clubLinks.map((club) => (
                    <Link
                      key={club.to}
                      to={club.to}
                      className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                    >
                      {club.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="hover:text-yellow-300 md:font-semibold">ABOUT US</Link>
            <Link to="/contact" className="hover:text-yellow-300 md:font-semibold">CONTACT</Link>
          </div>

          {/* Right Side Auth */}
          <div className="hidden md:block">
            {state.user ? (
              <Dropdown overlay={dashboardMenu} placement="bottomRight" arrow>
                <Button className="text-blue-900 font-semibold">Dashboard <DownOutlined /></Button>
              </Dropdown>
            ) : (
              <Link to="/login" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-300 font-semibold">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-950 px-4 pb-4 space-y-3 text-white">
            <Link to="/" className="block hover:text-yellow-300">HOME</Link>

            <div>
              <div onClick={() => setIsClubOpenMobile(!isClubOpenMobile)} className="cursor-pointer hover:text-yellow-300">
                CLUBS {isClubOpenMobile ? "▲" : "▼"}
              </div>
              {isClubOpenMobile && (
                <div className="pl-4 mt-1 space-y-1">
                  {clubLinks.map((club) => (
                    <Link
                      key={club.to}
                      to={club.to}
                      className="block text-sm hover:text-yellow-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {club.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block hover:text-yellow-300">ABOUT US</Link>
            <Link to="/contact" className="block hover:text-yellow-300">CONTACT</Link>

            {state.user ? (
              <>
                <Link to="/notice" className="block hover:text-yellow-300">Notices</Link>
                <Link to="/upcoming-event" className="block hover:text-yellow-300">Upcoming Event</Link>
                <Link to="/event" className="block hover:text-yellow-300">Event Data</Link>
                <span onClick={handleLogOut} className="block cursor-pointer hover:text-red-400">Logout</span>
              </>
            ) : (
              <Link to="/login" className="block bg-yellow-400 text-blue-900 px-4 py-2 mt-2 rounded hover:bg-yellow-300 font-semibold">
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
