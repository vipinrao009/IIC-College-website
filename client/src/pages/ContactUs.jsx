import React from "react";
import Layout from "../Layout/Layout";

const ContactUs = () => {
  return (
    <Layout className="bg-gray-100 min-h-screen">
      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Contact Details</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl mr-4">
                📍
              </span>
              <p className="text-gray-700">NH2, Khandari Crossing, Near, Khandari, Agra, Uttar Pradesh 282002</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl mr-4">
                📧
              </span>
              <p className="text-gray-700">directorietagra@gmail.com</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 text-2xl mr-4">
                📞
              </span>
              <p className="text-gray-700"> (+91) 0562-2522622</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8">
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
              <p className="text-gray-600">Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
