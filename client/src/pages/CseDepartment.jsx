import React from "react";
import Layout from "../Layout/Layout";

const CSEDepartment = () => {
    const facultyList = [
        { 
          name: "Dr. Rajesh Lavania", 
          position: "Head of the Department", 
          image: "path/to/dr-rajesh-lavania.jpg" // Replace with actual image paths
        },
        { 
          name: "Er. Subodh Sharma", 
          position: "Assistant Professor", 
          image: "path/to/er-subodh-sharma.jpg"
        },
        { 
          name: "Er. Prashant Maharishi", 
          position: "Assistant Professor", 
          image: "path/to/er-prashant-maharaj.jpg"
        },
        { 
          name: "Er. Saurabh Garg", 
          position: "Assistant Professor", 
          image: "path/to/er-saurabh-garg.jpg"
        },
        { 
          name: "Er. Aditi AK Gupta", 
          position: "Assistant Professor", 
          image: "path/to/er-aditi-ak-gupta.jpg"
        },
        { 
          name: "Dr. Pragya Kabra ", 
          position: "Assistant Professor", 
          image: "path/to/er-pragya-kato.jpg"
        },
        { 
          name: "Er. Shikhi Agrawal", 
          position: "Assistant Professor", 
          image: "path/to/er-shikhi-agarwal.jpg"
        },
      ];

  return (
    <Layout className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">CSE Department</h1>
          <nav>
            <ul className="flex space-x-6 text-lg font-medium">
              <li>
                <a href="#about" className="hover:text-blue-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-blue-300 transition">
                  Vision
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-blue-300 transition">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-center text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,classroom')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            Excellence in Education & Research
          </h2>
          <p className="text-lg md:text-2xl">
            Fostering innovation and shaping the future of technology.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">About CSE Department</h3>
          <p className="text-lg leading-relaxed mx-auto max-w-3xl text-gray-700">
            The Computer Science Engineering Department is dedicated to providing high-quality education, fostering innovation, and preparing students for successful careers. With state-of-the-art infrastructure and experienced faculty, we focus on building strong foundations for research, development, and professional excellence.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300">
            <h4 className="text-2xl text-center font-bold text-blue-600 mb-4">Vision</h4>
            <p className="text-gray-700 leading-relaxed">
              To address global challenges by fostering innovation, research, and excellence in Computer Science Engineering.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300">
            <h4 className="text-2xl text-center font-bold text-blue-600 mb-4">Mission</h4>
            <p className="text-gray-700 leading-relaxed">
              To develop skilled professionals equipped with theoretical knowledge and practical experience, promoting sustainable development and industry readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Meet Our Faculty
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((faculty, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300"
              >
                <img
                  src={faculty.image} // Link to the image for each faculty member
                  alt={`Faculty - ${faculty.name}`}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-lg"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {faculty.name}
                </h4>
                <p className="text-sm text-gray-600">{faculty.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            Reach out for inquiries or collaboration opportunities.
          </p>
          <a
            href="mailto:official@university.edu"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            official@university.edu
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default CSEDepartment;
