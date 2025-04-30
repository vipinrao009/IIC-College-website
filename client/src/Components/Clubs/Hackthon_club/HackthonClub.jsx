import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'

const HackthonClub = () => {
  const {clubName} =  useParams()
    return (
        <Layout>
          <div className="font-sans">
          {/* Header Section */}
          <header className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center px-4">
              <nav className="flex text-right font-semibold space-x-6">
               <Link to={`/club/${clubName}/events`} className="hover:text-gray-300">Events</Link>
              </nav>
            </div>
          </header>
    
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center text-white py-12 px-4"
            style={{
              backgroundImage: `url(https://img.freepik.com/free-photo/gray-painted-background_53876-94041.jpg?t=st=1745577797~exp=1745581397~hmac=2e7a0e335007c4a78de872365a00ede136ddc770fd81cf6089ab8e34a86fe3f3&w=1380)`, // Replace with your image path
            }}
          >
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Institute Of Engineering And Technology, Khandari Hackthon Club!
              </h1>
              <p className="text-lg md:text-xl">
              The Hackathon Club is a community of innovative thinkers, problem solvers, and tech enthusiasts who thrive in fast-paced, challenge-driven environments. It brings together students from diverse domains to brainstorm, build, and showcase real-world solutions through hackathons.</p>
            </div>
          </section>
    
          {/* Content Section */}
          <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The club regularly organizes internal hackathons, coding sprints, and collaboration workshops to sharpen members’ technical and teamwork skills. It also prepares students to participate and excel in national and international level hackathons like Smart India Hackathon, HackMIT, and more.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              By fostering creativity, critical thinking, and rapid prototyping, the Hackathon Club empowers students to turn ideas into impactful solutions. Whether you're a coder, designer, or just love solving problems — this is the place to innovate, collaborate, and lead the future of technology.
              </p>
            </div>
          </section>
    
          {/* Incharge Section */}
          <section className="bg-blue-50 py-8 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
                Incharge of Club: Er. Rajesh Lavania
              </h2>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-white py-12 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
              <p className="text-gray-700 mb-6">
                Ready to level up your coding journey? Join our community!
              </p>
              <a
                href="#join"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
              >
                Join Now
              </a>
            </div>
          </section>
        </div>
        </Layout>
    )
}

export default HackthonClub
