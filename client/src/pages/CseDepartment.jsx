import React from "react";
import Layout from "../Layout/Layout";
import Aditi from "../Assets/faculty/Aditi.jpg";
import hod from "../Assets/faculty/hod.jpg";
import Pragya from "../Assets/faculty/pragya.jpg";
import Sikhkhi from "../Assets/faculty/sikhkhi.jpg";
import Saurabh from "../Assets/faculty/Saurabh.jpg";
import Prashant from "../Assets/faculty/Prashant.jpg";
import director from "../Assets/faculty/director.jpg";
import Ratna from "../Assets/faculty/Ratna.jpg";

const CSEDepartment = () => {
  const facultyList = [
    {
      name: "Prof. Manu Prtap Singh",
      position: "Director",
      image: director,
    },
    {
      name: "Dr. Rajesh Lavania",
      position: "Head of the Department",
      image: hod,
    },
    {
      name: "Er. Subodh Sharma",
      position: "Assistant Professor",
      image: "path/to/er-subodh-sharma.jpg",
    },
    {
      name: "Er. Prashant Maharishi",
      position: "Assistant Professor",
      image: Prashant,
    },
    {
      name: "Er. Saurabh Garg",
      position: "Assistant Professor",
      image: Saurabh,
    },
    {
      name: "Er. Aditi AK Gupta",
      position: "Assistant Professor",
      image: Aditi,
    },
    {
      name: "Dr Ratna Pandey",
      position: "Assistant Professor",
      image: Ratna,
    },
    {
      name: "Dr. Pragya Kabra ",
      position: "Assistant Professor",
      image: Pragya,
    },
    {
      name: "Er. Shikhi Agrawal",
      position: "Assistant Professor",
      image: Sikhkhi,
    },
  ];

  return (
    <Layout className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[450px] flex items-center justify-center text-center text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?technology,classroom')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            Excellence in Education & Research
          </h2>
          <p className="text-lg md:text-2xl drop-shadow-sm">
            Fostering innovation and shaping the future of technology.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">About CSE Department</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            The Computer Science Engineering Department is committed to delivering top-notch education and promoting a culture of innovation. With a team of dedicated faculty and state-of-the-art infrastructure, our mission is to prepare students to become leaders in technology and research.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h4 className="text-2xl font-bold text-blue-600 mb-4 text-center">Vision</h4>
            <p className="text-gray-700 leading-relaxed text-center">
              To address global challenges by fostering innovation, research, and excellence in Computer Science Engineering.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h4 className="text-2xl font-bold text-blue-600 mb-4 text-center">Mission</h4>
            <p className="text-gray-700 leading-relaxed text-center">
              To develop skilled professionals equipped with theoretical knowledge and practical experience, promoting sustainable development and industry readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 text-center mb-10">
            Meet Our Faculty
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyList.map((faculty, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition duration-300 text-center"
              >
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {faculty.name}
                </h4>
                <p className="text-sm text-gray-600">{faculty.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h3>
          <p className="text-lg text-gray-700 mb-4">
            For any inquiries or collaboration opportunities, feel free to reach out to us.
          </p>
          <a
            href="mailto:official@university.edu"
            className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            official@university.edu
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default CSEDepartment;