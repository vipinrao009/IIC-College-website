import React from "react";
import Layout from "../Layout/Layout";

const events = [
  { year: "2024", data: "Event-Data" },
  { year: "2023", data: "Event-Data" },
  { year: "2022", data: "Event-Data" },
  { year: "2020", data: "Event-Data" },
  { year: "2019", data: "Event-Data" },
  { year: "2018", data: "Event-Data" },
];

const EventCard = ({ year, data }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
    <img
      src="https://via.placeholder.com/150" // Replace with the actual event image URL
      alt={`Event ${year}`}
      className="w-full h-40 object-cover"
    />
    <div className="bg-gray-900 text-white p-4">
      <h3 className="text-lg font-bold">{year}</h3>
      <p className="text-sm">{data}</p>
    </div>
  </div>
);

const YearWiseEvents = () => {
  return (
    <Layout>
         <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-8">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-extrabold text-center">Year-Wise Events</h1>
          {/* <nav className="mt-6 flex justify-center space-x-6">
            <a href="/" className="text-white hover:text-yellow-300">
              Home
            </a>
            <a href="#faculty" className="text-white hover:text-yellow-300">
              Faculty
            </a>
            <a href="#about-us" className="text-white hover:text-yellow-300">
              About-Us
            </a>
            <a href="#cse" className="text-white hover:text-yellow-300">
              CSE
            </a>
            <a href="#contact-us" className="text-white hover:text-yellow-300">
              Contact-Us
            </a>
          </nav> */}
        </div>
      </header>

      {/* Events Grid */}
      <main className="container mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} year={event.year} data={event.data} />
          ))}
        </div>
      </main>
    </div>
    </Layout>
  );
};

export default YearWiseEvents;
