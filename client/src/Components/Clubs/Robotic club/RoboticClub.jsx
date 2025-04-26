import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link } from 'react-router-dom'

const RoboticClub = () => {
    return (
        <Layout>
          <div className="font-sans">
          {/* Header Section */}
          <header className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center px-4">
              <nav className="flex text-right font-semibold space-x-6">
                <Link to={'/events'} className="hover:text-gray-300">Events</Link>
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

export default RoboticClub
