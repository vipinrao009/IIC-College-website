import React from 'react'
import Layout from '../../../Layout/Layout'
import { Link, useParams } from 'react-router-dom'

const SportClub = () => {
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
                Welcome to Institute Of Engineering And Technology, Khandari Sport Club!
              </h1>
              <p className="text-lg md:text-xl">
              The Sports Club is the heart of campus life, promoting physical fitness, team spirit, and a healthy competitive environment. It brings together students who are passionate about sports and athletics, providing a platform to train, compete, and grow.</p>
            </div>
          </section>
    
          {/* Content Section */}
          <section className="bg-gray-100 py-12 px-4">
            <div className="container mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              With regular practice sessions, inter-departmental matches, and college-level tournaments, the club encourages participation in both indoor and outdoor games like cricket, football, badminton, table tennis, and more. It fosters discipline, leadership, and strategic thinking — qualities essential on and off the field.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
              The Sports Club isn't just about competition; it's about building friendships, staying active, and embracing a balanced lifestyle. Whether you're a seasoned athlete or just starting out, the club welcomes everyone with energy and enthusiasm.
              </p>
            </div>
          </section>
    
          {/* Incharge Section */}
          <section className="bg-blue-50 py-8 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
                Incharge of Club: Er. Harvir Singh
              </h2>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-white py-12 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us Today!</h2>
              <p className="text-gray-700 mb-6">
                Ready to level up your Sports journey? Join our community!
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

export default SportClub
