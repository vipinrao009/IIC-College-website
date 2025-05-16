import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Contact Details */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section - Contact Info */}
        <div className="text-sm space-y-4">
            
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <span>+91 0562-2522622</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✉️</span>
            <span>directorieagra@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <span>I.E.T Khandari, Agra</span>
          </div>
        </div>

        {/* Social Media Icons */}
         <div className="mt-6 text-2xl md:mt-0 flex space-x-6">
         <Link to={"https://www.facebook.com/IETDBRAUAGRA"} className="hover:text-blue-300"><FaFacebook/></Link>
         <Link to={"https://x.com/dbrauagra?t=eYqZs1fpM2LdMZK-a7YqfA&s=09"} className="hover:text-blue-300"><FaTwitter/></Link>
         <Link to={"https://youtube.com/@drbhimraoambedkaruniversit6515?si=maUn_O9ISN89VWY0"} className="hover:text-blue-300"><FaYoutube/></Link>
         <Link to={"https://www.instagram.com/dr_bhimrao_ambedkar_university?igsh=eTdteXU4dDVhdDRz"} className="hover:text-blue-300"><FaInstagram/></Link>
        </div> 
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-6"></div>

  
      <div className="container mt-4 mx-auto text-center">
          <p>© 2025 CSE Department | All Rights Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
