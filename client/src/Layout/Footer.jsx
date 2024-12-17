import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

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
         <FaFacebook/>
         <FaTwitter/>
         <FaYoutube/>
         <FaInstagram/>
        </div> 
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-6"></div>

      {/* Footer Note */}
      <div className="text-center mt-4 text-sm">
        Thank you for visiting me !!
      </div>
    </footer>
  );
};

export default Footer;
