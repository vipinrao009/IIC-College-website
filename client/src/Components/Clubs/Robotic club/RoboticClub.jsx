import React, { useState } from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import JoinClubModal from '../../JoinClubModal '

const RoboticClub = () => {
  const {clubName} =  useParams()
  const [modalOpen, setModalOpen] = useState(false);

    return (
        <Layout>
          <div className="font-sans">
          {/* Header Section */}
          <header className="bg-gray-800 text-white py-6 shadow-lg z-10 relative">
            <div className="container mx-auto flex justify-between items-center px-3">
              <nav>
                <Link
                  to={`/club/${clubName}/events`}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 rounded-full border-4 border-yellow-500 animate-pulse
                  hover:from-yellow-500 hover:to-red-400 hover:shadow-yellow-500/80 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10"> View Events</span>
                
                </Link>
              </nav>
            </div>
          </header>
    
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center text-white py-12 px-4"
            style={{
              backgroundImage: `url(https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.jpg?s=612x612&w=0&k=20&c=MlbHdhkfqetT9b9kq58EPb2x_twui75NS-dCY01nf4Q=)`, // Replace with your image path
            }}
          >
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Institute Of Engineering And Technology, Khandari Robotic Club!
              </h1>
              <p className="text-lg md:text-xl">
              A Robotics Club is a community where enthusiasts passionate about robotics, electronics, and automation come together to explore, build, and innovate. It’s a place for hands-on learning, creative collaboration, and engaging in real-world robotic challenges and projects.
              </p>
            </div>
          </section>
    
          {/* Content Section */}
          <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Robotics Club serves as a dynamic platform for students passionate about robotics, automation, and innovation. Through regular workshops, hands-on sessions, and inter-college competitions, the club cultivates technical proficiency and creative problem-solving skills among its members.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              By working on real-world robotics projects — from line-followers to AI-driven bots — students not only apply theoretical knowledge but also collaborate as a team, nurturing a culture of innovation and exploration.
              </p>
            </div>
          </section>
    
          {/* Incharge Section */}
          <section className="bg-blue-50 py-8 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
                Incharge of Club: Dr. D. Shakina Deiv
              </h2>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-white py-12 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
              <p className="text-gray-700 mb-6">
                Ready to level up your Robotics journey? Join our community!
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
              >
                Join Now
              </button>

              <JoinClubModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                clubName={clubName}
              />
            </div>
          </section>
        </div>
        </Layout>
    )
}

export default RoboticClub
